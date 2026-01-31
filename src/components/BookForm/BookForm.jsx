import { useState } from "react";
import { bookCamper } from "../../redux/campers/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectLoading } from "../../redux/campers/selectors";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import style from "./BookForm.module.css";

const emailRegExp = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const BookFormSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, "Too Short!")
		.max(50, "Too Long!")
		.required("Required"),
	email: Yup.string()
		.matches(emailRegExp, "Email is not valid.")
		.required("Required"),
	bookingDate: Yup.date()
		.nullable()
		.required("Required")
		.typeError("Please enter a valid date"),
	comment: Yup.string().max(1000, "Too Long!"),
});

const initialValues = {
	name: "",
	email: "",
	bookingDate: null,
	comment: "",
};

export default function BookForm({ camperId }) {
	const dispatch = useDispatch();
	const [isFocused, setIsFocused] = useState(false);
	const loading = useSelector(selectLoading);

	const handleSubmit = (values, actions) => {
		const newBooking = {
			camperId,
			newBookingData: {
				...values,
				bookingDate: values.bookingDate.toISOString(),
			},
		};
		dispatch(bookCamper(newBooking))
			.unwrap()
			.then(() => {
				toast.success("The booking is successful");
				actions.resetForm();
			})
			.catch(() => {
				toast.error("The booking is not successful");
			});
	};
	return (
		<div className={style.BookForm__box}>
			<h3 className={style.BookForm__header}>Book your campervan now</h3>
			<p className={style.BookForm__slogan}>
				Stay connected! We are always ready to help you.
			</p>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={BookFormSchema}
			>
				<Form className={style.BookForm}>
					<div className={style.BookForm__item}>
						<Field
							type="text"
							name="name"
							className={style.BookForm__field}
							placeholder="Name*"
						/>
						<ErrorMessage
							name="name"
							component="span"
							className={style.BookForm__error}
						/>
					</div>
					<div className={style.BookForm__item}>
						<Field
							type="text"
							name="email"
							className={style.BookForm__field}
							placeholder="Email*"
						/>
						<ErrorMessage
							name="email"
							component="span"
							className={style.BookForm__error}
						/>
					</div>
					<div className={style.BookForm__item}>
						<Field name="bookingDate">
							{({ field, form }) => (
								<DatePicker
									{...field}
									selected={field.value ? new Date(field.value) : null}
									onChange={(val) => form.setFieldValue(field.name, val)}
									placeholderText={
										isFocused ? "Select a date between today" : "Booking date*"
									}
									onFocus={() => setIsFocused(true)}
									onBlur={() => {
										setIsFocused(false);
										field.onBlur({ target: { name: field.name } });
									}}
									className={style.BookForm__field}
									dateFormat="dd.MM.yyyy"
									minDate={new Date()}
								/>
							)}
						</Field>
						<ErrorMessage
							name="bookingDate"
							component="span"
							className={style.BookForm__error}
						/>
					</div>
					<div className={style.BookForm__item}>
						<Field
							as="textarea"
							name="comment"
							className={style.BookForm__commentField}
							placeholder="Comment"
						/>
						<ErrorMessage
							name="comment"
							component="span"
							className={style.BookForm__error}
						/>
					</div>

					<button color="primary" type="submit" className={style.BookForm__btn}>
						{loading ? (
							<ClipLoader
								color="#FFFFFF"
								size={25}
								aria-label="Loading Spinner"
								data-testid="loader"
							/>
						) : (
							"Send"
						)}
					</button>
				</Form>
			</Formik>
		</div>
	);
}

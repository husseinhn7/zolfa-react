import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required')
});


export const registerSchemaStep1 = Yup.object({
  // Step 1 fields
  firstName: Yup.string()
    .required("الإسم الأول is required")
    .max(50, "الإسم الأول should not exceed 50 characters"),
  lastName: Yup.string()
    .required("الإسم الثاني is required")
    .max(50, "الإسم الثاني should not exceed 50 characters"),
  email: Yup.string()
    .email("Invalid email format")
    .required("البريد الإليكتروني is required"),
  password: Yup.string()
    .required("كلمة المرور is required")
    .min(8, "كلمة المرور should be at least 8 characters long"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("اعادة كلمة المرور is required"),

  
});

export const registerSchemaStep2 = Yup.object({
    intake: Yup.string().required("Please select a framework"),
    level: Yup.string().required("Please select a framework"),
    gender: Yup.string().required("Please select a framework"),
    birthDate: Yup.date()
      .required("Please select a date")
      .nullable(),  
    personalImage: Yup.mixed().optional(),
})
export default loginSchema;

import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('البريد الإلكتروني غير صالح')
    .required('البريد الإلكتروني مطلوب'),
  password: Yup.string()
    .min(8, 'يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل')
    .required('كلمة المرور مطلوبة')
});

export const registerSchemaStep1 = Yup.object({
  // الحقول الخاصة بالخطوة الأولى
  firstName: Yup.string()
    .required("الاسم الأول مطلوب")
    .max(50, "يجب ألا يتجاوز الاسم الأول 50 حرفًا"),
  lastName: Yup.string()
    .required("الاسم الأخير مطلوب")
    .max(50, "يجب ألا يتجاوز الاسم الأخير 50 حرفًا"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صالح")
    .required("البريد الإلكتروني مطلوب"),
  password: Yup.string()
    .required("كلمة المرور مطلوبة")
    .min(8, "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "يجب أن تتطابق كلمات المرور")
    .required("تأكيد كلمة المرور مطلوب"),
});

export const registerSchemaStep2 = Yup.object({
    intake: Yup.string().required("الرجاء اختيار الدفعة"),
    level: Yup.string().required("الرجاء اختيار المستوى"),
    gender: Yup.string().required("الرجاء تحديد الجنس"),
    birthDate: Yup.date()
      .required("الرجاء اختيار تاريخ الميلاد")
      .nullable(),  
    personalImage: Yup.mixed().optional(),
});

export default loginSchema;

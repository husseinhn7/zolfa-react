import * as Yup from 'yup';

export const examDetailsSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  subject: Yup.string().required("Subject is required"),
  comment: Yup.string(),
});

export const examSettingsSchema = Yup.object({
    startDate: Yup.date()
      .required("Start date is required")
      .min(new Date(), "Start date cannot be in the past"),
    
    endDate: Yup.date()
      .required("End date is required")
      .min(
        Yup.ref('startDate'), 
        "End date must be after the start date"
      ),
  });


export const questionSchema = Yup.object({
    question: Yup.string()
      .required("Question is required")
      .min(5, "Question must be at least 5 characters long"),
  
  options: Yup.array()
  .of(
    Yup.object().shape({
      id: Yup.number().required("ID is required"),
      option: Yup.string().required("Option cannot be empty") 
    })
  )
  .min(2, "At least two options are required")
  .required("Options are required")
  ,
  
    correctOption: Yup.number()
      .required("Correct option is required")
      ,
  
    mark: Yup.number()
      .required("Mark is required")
      .min(1, "Mark must be at least 1"),
  });
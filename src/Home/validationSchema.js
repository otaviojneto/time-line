import * as yup from "yup";

const requiredField = "Campo obrigatório";

const validationSchema = yup.object().shape({
  companyName: yup.string().min(5, "min 5").required(requiredField),
  office: yup.string().required(requiredField),
  startDate: yup.number().required(requiredField),
  endDate: yup.number().required(requiredField),
  description: yup.string().required(requiredField),
});

export default validationSchema;

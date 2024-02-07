export default function Validation(values){
    const errors = {};
        if (!values.name) {
            errors.name = "Project Name is required";
        }
        if(!values.projectId){
            errors.projectId = "Project Id is required";
        }
        if (!values.description) {
            errors.description = "Description is required";
        }
        if (!values.source_code_link) {
            errors.source_code_link = "Source Code Link is required";
        }
        
    return errors;
}
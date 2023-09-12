const regex = /^[a-zA-Z]+$/;

export const searchValidations = (data) => {
    let errors;
    if (!regex.test(data)) errors = "Search can only contain characters"
    if (data === "") errors = "Enter at least one character"
    return errors
}

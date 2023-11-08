/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 */
define(['N/ui/serverWidget'], function(serverWidget) {

    function onRequest(context) {
        let request = context.request;
        let response = context.response;

        //Create the form object
        const form = serverWidget.createForm({
            title: "Employee Notes",
            hideNavBar: false
        });

        //Fields for the form
        const nameField = form.addField({
            id: "custpage_l1_employee_name",  // lowercase and no spaces
            type: serverWidget.FieldType.TEXT,
            label: "Name"
        });

        const notesField = form.addField({
            id: "custpage_l1_employee_notes",
            type: serverWidget.FieldType.TEXT,
            label: "Notes"
        });

        const empId = form.addField({
            id: "custpage_l1_employee_id",
            type: serverWidget.FieldType.TEXT,
            label: "ID"
        });

        //save button
        form.addSubmitButton({
            label: "Save"
        });

        //Disabled the name field
        nameField.updateDisplayType({
            displayType: serverWidget.FieldDisplayType.INLINE
        });

        //Hide employee ID
        empId.updateDisplayType({
            displayType: serverWidget.FieldDisplayType.HIDDEN
        });

        //add the fields and button to the form
        response.writePage(form);
    }

    return {
        onRequest: onRequest
    }
});

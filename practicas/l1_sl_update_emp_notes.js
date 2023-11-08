/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 */
define(['N/ui/serverWidget', 'N/record', 'N/redirect'], function(serverWidget, record, redirect) {
    function onRequest(context) {
        let request = context.request;
        let response = context.response;

        //GET - obtain data from UE and create the form (comes from employee view)
        if(request.method === 'GET') {
            //Get the parameters from the redirect of the user event script (l1_hello_world_ue.js)
            const nameFromUe = request.parameters.l1_name;
            const notesFromUe = request.parameters.l1_notes;
            const empIdFromUe = request.parameters.l1_empid;

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

            //continue button
            form.addSubmitButton('Continue');

            //Set default values with the parameters data from the redirect of the UE.
            nameField.defaultValue = nameFromUe;
            notesField.defaultValue = notesFromUe;
            empId.defaultValue = empIdFromUe;

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
        } else { 
            //POST - update the record and redirect to employee view and set the value on the notes field

            //get the parameters from the form (Js no block scope)
            empId = request.parameters.custpage_l1_employee_id;
            notes = request.parameters.custpage_l1_employee_notes;

            //load the record
            const employee = record.load({
                type: record.Type.EMPLOYEE,
                id: empId,
            });

            //set the value on the notes field
            employee.setValue('comments', notes);
            employee.save();

            //redirect to the employee view
            redirect.toRecord({
                type: record.Type.EMPLOYEE,
                id: empId,
            });
        }
    }

    return {
        onRequest: onRequest
    }
});

/**
 *@NApiVersion 2.1
 *@NScriptType Suitelet
 */
define(['N/email', 'N/record', 'N/redirect', 'N/ui/serverWidget'], function(email, record, redirect, serverWidget) {

    function onRequest(context) {
        let request = context.request;
        let response = context.response;

        let form = serverWidget.createForm({
            title: 'Customer Onboard',
            hideNavBar: false //hide navbar on netsuite view
        });

        let customerInfoGroup = form.addFieldGroup({
            id: 'custpage_grp_customer',
            label: 'Customer Information'
        });

        let taskGroup = form.addFieldGroup({
            id: 'custpage_grp_task',
            label: 'Onboarding Task'
        });

        let emailGroup = form.addFieldGroup({
            id: 'custpage_grp_email',
            label: 'Welcome Email'
        });

        //Customer Fields
        let nameField = form.addField({
            id: 'custpage_nfo_name',
            type: serverWidget.FieldType.TEXT,
            label: 'Name',
            container: 'custpage_grp_customer' 
        });

        let salesRepFld = form.addField({
            id: 'custpage_nfo_salesrep',
            type: serverWidget.FieldType.SELECT,
            label: 'Sales Rep',
            source: 'employee',
            container: 'custpage_grp_customer'
        });

        let phoneFld = form.addField({
            id: 'custpage_nfo_phone',
            type: serverWidget.FieldType.TEXT,
            label: 'Phone',
            container: 'custpage_grp_customer'
        });

        //Task Fields
        let tskTitleFld = form.addField({
            id: 'custpage_tsk_title',
            type: serverWidget.FieldType.TEXT,
            label: 'Title',
            container: 'custpage_grp_task'
        });

        let tskNotesFld = form.addField({
            id: 'custpage_tsk_notes',
            type: serverWidget.FieldType.TEXTAREA,
            label: 'Notes',
            container: 'custpage_grp_task'
        });

        //Email Fields
        let emSubjectFld = form.addField({
            id: 'custpage_em_subject',
            type: serverWidget.FieldType.TEXT,
            label: 'Subject',
            container: 'custpage_grp_email'
        });

        let emBodyFld = form.addField({
            id: 'custpage_em_body',
            type: serverWidget.FieldType.TEXTAREA,
            label: 'Body',
            container: 'custpage_grp_email'
        });

        let noteFld = form.addField({
            id: 'custpage_note',
            type: serverWidget.FieldType.TEXTAREA,
            label: 'Note: These tasks are important customer onboarding tasks.'
        });

        //Add Buttons
        form.addSubmitButton({
            label: 'Save'
        });

        //Custom properties for the fields
        nameField.updateDisplayType({
            displayType: serverWidget.FieldDisplayType.DISABLED //This block the field
        });

        salesRepFld.updateDisplayType({
            displayType: serverWidget.FieldDisplayType.INLINE //This hide the field
        });

        phoneFld.updateDisplayType({
            displayType: serverWidget.FieldDisplayType.INLINE
        });

        emBodyFld.updateDisplaySize({
            height: 20,
            width: 85
        });

        noteFld.updateLayoutType({
            layoutType: serverWidget.FieldLayoutType.OUTSIDEABOVE
        });

        tskTitleFld.isMandatory = true;
        tskNotesFld.isMandatory = true;
        emSubjectFld.isMandatory = true;
        emBodyFld.isMandatory = true;
        
        response.writePage(form);
    }

    return {
        onRequest: onRequest
    }
});

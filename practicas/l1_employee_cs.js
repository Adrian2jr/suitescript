/**
 *@NApiVersion 2.x
 *@NScriptType ClientScript
 */
define(['N/https', "N/url"], function(https, url) {
    //cuando un campo cambia.
    function fieldChanged(context) {
        const employee = context.currentRecord;

        if(context.fieldId == "phone") {
            const fax = employee.getValue("fax");

            if(!fax) { 
                const phone = employee.getValue("phone");
                employee.setValue("fax", phone);
            }
        }
    }

    //si usamos esto, el usuario no se podra mover hasta que la validacion de true.
    function validateField(context) { 
        const employee = context.currentRecord;

        if(context.fieldId == "custentity_l1_employee_course") { 
            const empCourse = employee.getValue("custentity_l1_employee_course");

            //Access to RESTlet
            // const response  = https.get({
            //     url: "", // URL of the RESTlet
                
            // })

            // if(response.body == 'invalid') {
            //     alert("Invalid Employee course value. Please try again.");
            //     return false;
            // }

            if(empCourse == 'x') { 
                alert("Invalid Employee course value. Please try again.");
                return false;
            }
        }
        return true;
    }

    //cuando le pico "Save".
    function saveRecord(context) { 
        const employee = context.currentRecord;
        const empCourse = employee.getValue("custentity_l1_employee_course");

        if(empCourse == 'x') { 
            alert("Invalid Employee course value. Please try again.");
            return false;
        }

        return true;
    }

    return {
        // pageInit: pageInit,
        saveRecord: saveRecord,
        // validateField: validateField,
        fieldChanged: fieldChanged,
        // postSourcing: postSourcing,
        // lineInit: lineInit,
        // validateDelete: validateDelete,
        // validateInsert: validateInsert,
        // validateLine: validateLine,
        // sublistChanged: sublistChanged
    }
});

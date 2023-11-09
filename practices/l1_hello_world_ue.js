/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
define(['N/redirect'], function(redirect) {

    //cuando se carga la pagina, puedes hacer movimientos antes de que se cargue el registro
    function beforeLoad(context) {}

    //cuando se pica el boton de guardar, puedes hacer movimientos antes de que se guarde el registro
    function beforeSubmit(context) {}

    //cuando se guarda el registro pasa por esta funcion.
    function afterSubmit(context) {
        //get the custom entity field value
        const employee = context.newRecord;
        // const employeeCourse = employee.getValue({
        //     fieldId: "custentity_l1_employee_course"
        // });

        // log.debug("employeeCourse", employeeCourse);

        //redirect suitlet, in this example from employee view to the suitlet created:
        redirect.toSuitelet({ //passing values to the suitelet
            scriptId: 'customscript_l1_sl_update_emp_notes',
            deploymentId: 'customdeploy_l1_sl_update_emp_notes',
            parameters: {
                l1_name: employee.getValue('entityid'),
                l1_notes: employee.getValue('comments'),
                l1_empid: employee.id,
            },
        });
    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    }
});

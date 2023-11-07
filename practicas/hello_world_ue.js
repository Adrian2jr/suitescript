/**
 *@NApiVersion 2.x
 *@NScriptType UserEventScript
 */
define([], function() {

    //cuando se carga la pagina, puedes hacer movimientos antes de que se cargue el registro
    function beforeLoad(context) {}

    //cuando se pica el boton de guardar, puedes hacer movimientos antes de que se guarde el registro
    function beforeSubmit(context) {}

    //cuando se guarda el registro pasa por esta funcion.
    function afterSubmit(context) {
        log.debug("hello world");

        //get the custom entity field value
        const employee = context.newRecord;
        const employeeCourse = employee.getValue({
            fieldId: "custentity_l1_employee_course"
        });

        log.debug("employeeCourse", employeeCourse);
    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    }
});

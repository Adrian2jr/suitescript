/**
 *@NApiVersion 2.1
 *@NScriptType WorkflowActionScript
 */
define(['N/record', 'N/runtime'], function(record, runtime) {

    //This function will be called when the workflow action is triggered.
    function onAction(context) {
        //
        let worflowTotal = runtime.getCurrentScript().getParameter({
            name: 'custscript_l1_workflow_total'
        });

        let expReport = context.newRecord;
        let expenseCount = expReport.getLineCount({
            sublistId: 'expense'
        });
        let employeeId = expReport.getValue('entity');
        let notes = 'Workflow Total : ' + worflowTotal + ' Expense Count : ' + expenseCount;

        let employee = record.load({
            type: record.Type.EMPLOYEE,
            id: employeeId
        });

        employee.setValue('comments', notes);
        employee.save();

        if(!employeeId){ 
            return 'failed';
        }

        return 'success';
    }

    return {
        onAction: onAction
    }
});

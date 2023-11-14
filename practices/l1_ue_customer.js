/**
 *@NApiVersion 2.1
 *@NScriptType UserEventScript
 */
define(['N/redirect', 'N/record'], function(redirect, record) {

    function beforeLoad(context) {
        
    }

    function beforeSubmit(context) {
        
    }

    function afterSubmit(context) {
        let customer = context.newRecord;

        if(context.type == context.UserEventType.CREATE) { 
            redirect.toSuitelet({
                scriptId: 'customscript_l1_customer_onboard',
                deploymentId: 'customdeploy_l1_customer_onboard',
                parameters: {
                    l1_customer_id: customer.id,
                    l1_phone: customer.getValue({fieldId: 'phone'}),
                    l1_email: customer.getValue({fieldId: 'email'}),
                    l1_salesrep: customer.getValue({fieldId: 'salesrep'}),
                }
            });
        }
        
    }

    return {
        beforeLoad: beforeLoad,
        beforeSubmit: beforeSubmit,
        afterSubmit: afterSubmit
    }
});

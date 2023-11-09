/**
 *@NApiVersion 2.x
 *@NScriptType ScheduledScript
 */
define(['N/search'], function() {
    function execute(context) {
        /* create search with code
        let caseSearch = search.create({
            type: search.Type.SUPPORT_CASE,
            filters: [
                search.createFilter({
                    name: 'escalated',
                    operator: search.Operator.IS,
                    values: true //search the internal ID is better. (on case status list)
                })
            ],
            columns: [
                search.createColumn({ name: 'casenumber' }),
                search.createColumn({ name: 'title' }),
                 search.createColumn({ name: 'department', join: 'employee' }), ---> with join
            ],
        });
        */

        //Search the saved search from netsuite
        let caseSearch = search.load({
            id: 'customsearch_l1_ss_escalated_cases'
        });

        //Run the search and obtain the results
        let caseSearchResults = caseSearch.run().getRange({
            start: 0,
            end: 1000
        });

        //Print the results
        for (let i = 0; i < caseSearchResults.length; i++) {
            let caseResult = caseSearchResults[i];
            log.debug('Case #' + i, 'Case Number: ' + caseResult.getValue('casenumber') + ' Title: ' + caseResult.getValue('title') + ' Department: ' + caseResult.getText('department', 'employee'));
        }
    }

    return {
        execute: execute
    }
});

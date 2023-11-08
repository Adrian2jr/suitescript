/**
 *@NApiVersion 2.1
 *@NScriptType Restlet
 */
define([], function() {

    function _get(context) {
        const employeeCourse = context.custparam_couponcode;

        if(employeeCourse == 'ABC12') { 
           return 'invalid';
        }

        return 'valid';
    }

    function _post(context) {
        
    }

    function _put(context) {
        
    }

    function _delete(context) {
        
    }

    return {
        get: _get,
        post: _post,
        put: _put,
        delete: _delete
    }
});

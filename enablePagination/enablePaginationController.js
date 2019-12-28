({
    init: function(cmp, event, helper) {
        helper.getData(cmp,cmp.get("v.start"),cmp.get("v.pageSize"));
    },
	next: function (cmp, event, helper) {
        helper.setData(cmp, { 'which' : 'next' });
    },
    prev: function (cmp, event, helper) {
        helper.setData(cmp, { 'which' : 'prev' });
    },
    first: function (cmp, event, helper) {
        helper.setData(cmp, { 'which' : 'first' });
    },
    last: function (cmp, event, helper) {
        helper.setData(cmp, { 'which' : 'last' });
    },
    changePageSize: function (cmp, event, helper) {
        const value = cmp.find('pagesize').get('v.value');
        cmp.set('v.pageSize', parseInt(value));
        helper.setData(cmp, { 'which' : 'first' });
    }
})
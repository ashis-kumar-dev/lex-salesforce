({
    handleKeyUp: function(component, event, helper) {
        const searchOnEnter   = component.get('v.searchOnEnterKey');
        const isEnterKey      = event.keyCode === 13 && searchOnEnter;
        if (!searchOnEnter || isEnterKey) {
            const queryTerm   = component.find('enter-search').get('v.value');
            // ignore case Regular Expression 
            const queryRegExp = new RegExp(queryTerm, 'i');  
            const tableData   = component.get('v.data');
            let data          = component.get('v.memory');
            if (data == undefined || data.length < tableData.length) {
                data          = tableData;
                component.set('v.memory', data);
            }
            const columns     = component.get('v.columns');
            if (queryTerm != undefined && queryTerm.length != 0) {
                if (columns.length == 0 && data.length != 0) {
                    helper.find(component, data, Object.keys(data[0]), queryRegExp);
                } else {
                    helper.find(component, data, columns, queryRegExp);
                }
            } else {
                helper.rerender(component, data);
            }            
        }
    },
    showOnTable: function(component, event, helper) {
        const index          = event.target.getAttribute('data-info');
        const data           = component.get('v.memory')[index];
        helper.rerender(component, data);
    }
});
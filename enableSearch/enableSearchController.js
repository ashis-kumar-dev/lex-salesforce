({
    handleKeyUp: function(component, event, helper) {
        const isEnterKey = event.keyCode === 13;
        if (isEnterKey) {
            const queryTerm = component.find('enter-search').get('v.value');
            const tableData = component.get('v.data');
            let data = component.get('v.memory');
            if (data == undefined || data.length < tableData.length) {
                data = tableData;
                component.set('v.memory', data);
            }
            const columns = component.get('v.columns');
            if (queryTerm != undefined && queryTerm.length != 0) {
                if (columns.length == 0 && data.length != 0) {
                    helper.find(component, data, Object.keys(data[0]), queryTerm);
                } else {
                    helper.find(component, data, columns, queryTerm);
                }
            } else {
                component.set('v.data', data);
            }
        }
    }
});
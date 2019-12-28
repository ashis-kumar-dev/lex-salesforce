({
    find : function(component, searchList, searchColumns, searchFor) { 
        const  searchResult = [];
        for (const item in searchList) {
            for (const key in searchColumns) {
                if (searchList[item][searchColumns[key]].toUpperCase().includes(searchFor.toUpperCase())) {
                    searchResult.push(searchList[item]);
                    break;
                }
            }
        }
        component.set('v.data', searchResult);
    }
})
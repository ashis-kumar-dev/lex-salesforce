({
  find: function(component, searchList, searchColumns, searchFor) {
    const searchResult = searchList.filter(function(searchListItem, index) {
        searchListItem['index'] = index;
        let isMatch = false;
        if(!isMatch) {
            searchColumns.forEach(function(searchColumn) {
                try {
                    const toMatch = searchListItem[searchColumn].toString();
                    if (searchFor.test(toMatch)) {
                        isMatch = true;
                        searchListItem['match'] = toMatch;
                    }
                } catch (error) {
                    
                }
                
            });
        }        
        return isMatch;
    });
    component.set("v.searchResult", searchResult);
  },
  rerender: function(component, data) {
    component.set("v.data", data);
    component.set("v.searchResult", []);
  }
});
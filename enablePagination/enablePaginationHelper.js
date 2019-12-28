({
    getData : function(cmp, rowToStart, rowToEnd) {
        cmp.set('v.data', cmp.get('v.master').slice(rowToStart, rowToEnd));
        cmp.set('v.end', rowToEnd);
    },
    setData : function(cmp, options) {
        const end = cmp.get('v.end');
        const start = cmp.get('v.start');
        const master = cmp.get('v.master');
        const defaultSize = cmp.get('v.pageSize');
        const current = cmp.get('v.pageNumber');
        
        switch(options.which) {   
            case 'prev':
                if(start-defaultSize >= 0) {            
                    cmp.set('v.data', master.slice(start-defaultSize, start));
                    cmp.set('v.start', start-defaultSize);
                    cmp.set('v.end', start);
                    cmp.set('v.pageNumber', current-1);
                }
                break;
            case 'next':
                if(end+defaultSize < master.length){            
                    cmp.set('v.data', master.slice(end, end+defaultSize));                  
                    cmp.set('v.start', end);
                    cmp.set('v.end', end+defaultSize);
                    cmp.set('v.pageNumber', current+1);
                } else if(master.length / defaultSize > current) {
                    cmp.set('v.data', master.slice(end, master.length));
                    cmp.set('v.start', end);
                    cmp.set('v.end', end+defaultSize);
                    cmp.set('v.pageNumber', current+1);
                }
                break;
            case 'first':
                cmp.set('v.data', master.slice(0, defaultSize));
                cmp.set('v.start', 0);
                cmp.set('v.end', defaultSize);
                cmp.set('v.pageNumber', 1);
                break;
            case 'last':
                const remaining = (master.length % defaultSize == 0) ? defaultSize : master.length % defaultSize;
                cmp.set('v.data', master.slice(master.length - remaining, master.length));
                cmp.set('v.start', master.length - remaining);
                cmp.set('v.end', master.length - remaining + defaultSize);
                cmp.set('v.pageNumber', Math.ceil(master.length / defaultSize));
                break;                
        }
    }
})
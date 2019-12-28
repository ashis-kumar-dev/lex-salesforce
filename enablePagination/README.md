# Enable Pagination

### Add pagination to your **lightning:datatable**

#### _Description_:

This component enables pagination for lightning:datatable using client-side javascript.

#### _Structure_:

**enablePagination** aura component bundle consists of the enablePagination.cmp, its controller and helper.

#### _Attributes_:

- **master** : [required](/#) This is the master object, where the data retrieved from server is stored.
- **data** : [required](/#) This is the object that is used in datatable
- **pageSize** : [optional](/#) This is the rows per page
- **start** : [default](/#) This is the start index of the record shown on datatable
- **end** : [default](/#) This is the end index of the record shown on datatable
- **pageNumber** : [default](/#) This is the current page number on datatable

> NOTE: Please do not initialize _**defaults**_. Pagination functionality highly depends on the default value of _**defaults**_.

#### _Installation_:

Click on [_Christmas' 20_](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2v000006SmnO&isdtp=p1) to install in your org.

#### _Instruction_:

- Create an attribute of type **' Object '** to store the data retrieved from the server. _For example: **master**_
- Do not use this attribute for datatable data.
- Add the **enablePagination** component where you want your buttons to be.
- Pass the attribute you created to store the server returned value to **' master '** and the attribute that you are using for datatable data to **' data '**.

`<c:enablePagination master="{! v.serverReturnedData }" data="{! v.dataForDatatable }" />`

- You can set the rows per page as below.

`<c:enablePagination master="{! v.serverReturnedData }" data="{! v.dataForDatatable }" pageSize="25" />`

**Happy Paging**. Feel free to post your requests.

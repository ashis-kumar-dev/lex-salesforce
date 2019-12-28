# Enable Search

### Add Search to your **lightning:datatable**

#### _Description_:

This component enables search functionality for lightning:datatable using client-side javascript.

#### _Structure_:

**enableSearch** aura component bundle consists of the enableSearch.cmp, its controller and helper.

#### _Attributes_:

- **data** : [required](/#) This is the object that is used in datatable
- **columns** : [default](/#) This is the list of columns to search in
- **memory** : [default](/#) This stores the data to enable consequent search

> NOTE: Please do not initialize _**defaults**_. Pagination functionality highly depends on the default value of _**defaults**_.

#### _Installation_:

Click on [_Christmas' 20_](https://login.salesforce.com/packaging/installPackage.apexp?p0=04t2v000006Sn5q&isdtp=p1) to install in your org.

#### _Instruction_:

- Add the **enableSearch** component where you want your Search to be.
- Pass the attribute that you are using for datatable data to **' data '**.

> `<c:enableSearch data="{! v.dataForDatatable }" />`

- You can set the **columns** as below.

> `<c:enableSearch columns="['column1','column2','column3']" data="{! v.dataForDatatable }" />`

**Happy Searching**. Feel free to post your requests.

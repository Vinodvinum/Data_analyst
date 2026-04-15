# Excel Workbook Template Layout (Companion)

Use this blueprint with the sample CSV files to build a production-style analysis workbook.

## Sheet 1: Raw_Data
Purpose: Source snapshot only (do not edit manually).

Columns:
- OrderID
- OrderDate
- Region
- SalesRep
- Product
- Units
- UnitPrice
- Discount
- Channel
- CustomerPhone
- Email
- Status

Action:
- Import excel-project-sales-raw.csv (or excel-project-sales-large.csv)
- Convert to table and name it tblSalesRaw

## Sheet 2: Lookup
Purpose: Region mapping and performance targets.

Columns:
- Region
- MonthlyTarget
- Manager

Action:
- Import excel-project-region-targets.csv
- Convert to table and name it tblRegionTargets

## Sheet 3: Clean_Data
Purpose: Data cleansing and enrichment layer.

Recommended columns:
- OrderID
- OrderDate_Raw
- OrderDate_Clean
- Region_Raw
- Region_Clean
- SalesRep_Raw
- SalesRep_Clean
- Product
- Units
- UnitPrice
- Discount
- GrossRevenue
- DiscountAmount
- NetRevenue
- Month
- Quarter
- Email
- Email_Valid
- RegionTarget
- Manager
- Status

Suggested formulas:
- Region_Clean: =PROPER(TRIM([@Region_Raw]))
- SalesRep_Clean: =PROPER(TRIM([@SalesRep_Raw]))
- GrossRevenue: =[@Units]*[@UnitPrice]
- DiscountAmount: =[@GrossRevenue]*[@Discount]
- NetRevenue: =[@GrossRevenue]-[@DiscountAmount]
- Month: =TEXT([@OrderDate_Clean],"mmm-yyyy")
- Quarter: ="Q"&ROUNDUP(MONTH([@OrderDate_Clean])/3,0)
- Email_Valid: =IF(ISNUMBER(SEARCH("@",[@Email])),"Valid","Invalid")
- RegionTarget: =XLOOKUP([@Region_Clean],tblRegionTargets[Region],tblRegionTargets[MonthlyTarget],"Not Found")
- Manager: =XLOOKUP([@Region_Clean],tblRegionTargets[Region],tblRegionTargets[Manager],"Not Found")

## Sheet 4: Analysis
Purpose: KPI and summary calculations before pivot/dashboard.

Suggested KPI blocks:
- Total Net Revenue
- Total Orders
- Average Order Value
- Return Rate
- Discount Impact

Suggested formulas:
- Total Net Revenue: =SUM(Clean_Data!N:N)
- Total Orders: =COUNTA(Clean_Data!A:A)-1
- Average Order Value: =IFERROR([Total Net Revenue]/[Total Orders],0)
- Returned Orders: =COUNTIF(Clean_Data!T:T,"Returned")
- Return Rate: =IFERROR([Returned Orders]/[Total Orders],0)

## Sheet 5: Pivot_Report
Purpose: Summarized analysis by region/product/time.

Pivot recommendation 1:
- Rows: Region_Clean
- Columns: Month
- Values: Sum of NetRevenue, Count of OrderID

Pivot recommendation 2:
- Rows: Product
- Values: Sum of NetRevenue
- Filter: Status

## Sheet 6: Dashboard
Purpose: Executive visualization and filters.

Widgets:
- KPI cards: Total Revenue, AOV, Return Rate
- Chart 1: NetRevenue by Region (clustered column)
- Chart 2: NetRevenue trend by Month (line chart)
- Chart 3: Product mix share (donut chart)
- Slicers: Region, Product, Status

Design checklist:
- Consistent colors for status and KPI signals
- Clear titles and units
- No 3D effects
- One-page printable layout

## Validation Checklist
- All date values are real date type
- No leading/trailing spaces in key text fields
- Email_Valid flagged for all invalid rows
- Pivot table refresh works after new rows added
- Dashboard slicers affect all charts consistently

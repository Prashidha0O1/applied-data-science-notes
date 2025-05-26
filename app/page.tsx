import React from "react";
import StatisticalTests from "./statistical-tests";
import MachineLearning from "./machine-learning";

export default function NotesPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6 font-serif">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold">Practice Question Paper: Applied Data Science (100 Marks, 2 Hours)</h1>

        <section>
          <h2 className="text-xl font-semibold">Section A: Foundational Concepts (25 Marks)</h2>

          <div className="mt-4">
            <h3 className="font-semibold">1. Define Data Science and explain its key components. (8 marks)</h3>
            <p className="mt-2">
              <strong>Definition:</strong> Data Science is an interdisciplinary field that uses statistical, computational, and domain expertise to extract insights from data.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Data Collection:</strong> Gathering structured/unstructured data from various sources (e.g., databases, APIs).</li>
              <li><strong>Data Processing:</strong> Cleaning and transforming data for analysis (e.g., handling missing values).</li>
              <li><strong>Analysis:</strong> Applying statistical or machine learning techniques to uncover patterns (e.g., regression, clustering).</li>
              <li><strong>Visualization:</strong> Presenting insights using charts or dashboards (e.g., matplotlib, Tableau).</li>
              <li><strong>Communication:</strong> Translating findings into actionable business recommendations.</li>
              <li><strong>Tools:</strong> Python, R, SQL, TensorFlow.</li>
              <li><strong>Applications:</strong> Predictive modeling, customer segmentation, fraud detection.</li>
              <li>Combines math, programming, and domain knowledge to solve real-world problems.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">2. Why are businesses increasingly investing in Data Science projects? Provide three reasons with examples. (7 marks)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Informed Decision-Making:</strong> Data Science provides insights to guide strategy. <br />Example: Predicting sales trends to optimize inventory.</li>
              <li><strong>Personalization:</strong> Tailors products/services to customer preferences. <br />Example: Netflix recommending shows based on viewing history.</li>
              <li><strong>Cost Efficiency:</strong> Identifies inefficiencies or risks to save resources. <br />Example: Detecting fraudulent transactions to reduce financial losses.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">3. List five common data mining tasks and briefly describe one. (10 marks)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Classification:</strong> Predicting categorical labels (e.g., spam vs. non-spam).</li>
              <li><strong>Regression:</strong> Predicting continuous values (e.g., house prices).</li>
              <li><strong>Clustering:</strong> Grouping similar data points (e.g., customer segmentation).</li>
              <li><strong>Association Rule Mining:</strong> Finding relationships between items (e.g., market basket analysis).</li>
              <li><strong>Anomaly Detection:</strong> Identifying outliers (e.g., fraud detection).</li>
            </ul>
            <p className="mt-2">
              <strong>Description of Clustering:</strong><br />
              Involves grouping data points based on similarity without predefined labels.<br />
              Example: Segmenting customers into groups based on purchasing behavior using K-Means.<br />
              Used in unsupervised learning to discover hidden patterns.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Section B: Business Data Environment & Relational Data Model (25 Marks)</h2>

          <div className="mt-4">
            <h3 className="font-semibold">1. Explain the difference between Business Analysis and Business Analytics, and describe how integrating Data Science into Business Analytics provides a competitive advantage. (7 marks)</h3>
            <p className="mt-2"><strong>Business Analysis:</strong><br />
              Focuses on analyzing past data to understand business processes.<br />
              Emphasizes descriptive statistics and reporting.<br />
              Aims to improve efficiency through structured methodologies.
            </p>
            <p className="mt-2"><strong>Business Analytics:</strong><br />
              Focuses on decision-making using data.<br />
              Uses predictive and prescriptive analytics for forecasting.<br />
              Forward-looking, aiming to optimize strategies.
            </p>
            <p className="mt-2"><strong>Integration of Data Science:</strong><br />
              Combines data inference, algorithm development, and technology.<br />
              Enables predictive modeling and machine learning.<br />
              Uncovers deeper insights and anticipates market trends.<br />
              Enhances personalization of customer experiences.<br />
              Optimizes operations for competitive advantage.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">2. Define Data Structure and list its three types as per the lecture content. (3 marks)</h3>
            <p className="mt-2">
              <strong>Definition of Data Structure:</strong><br />
              Organization, management, and storage format for data.<br />
              Enables efficient access and modification.<br />
              Includes data values, relationships, and applicable operations.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Structured Data</li>
              <li>Unstructured Data</li>
              <li>Semi-Structured Data</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">3. Describe Structured Data, provide three examples from the slides, and explain one advantage in the context of Business Analytics. (7 marks)</h3>
            <p className="mt-2">
              <strong>Structured Data:</strong><br />
              Organized in predefined formats like tables or spreadsheets.<br />
              Stored in fixed fields for efficient querying.<br />
              Suitable for structured analysis and reporting.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>CSV files</li>
              <li>Relational database tables</li>
              <li>Spreadsheets (without embedded files)</li>
            </ul>
            <p className="mt-2">
              <strong>Advantage in Business Analytics:</strong><br />
              Enables efficient querying using tools like SQL.<br />
              Facilitates rapid generation of reports and insights.<br />
              Supports timely decision-making in analytics.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">4. Explain the Relational Data Model using the example of an Excel spreadsheet. (5 marks)</h3>
            <p className="mt-2">
              <strong>Relational Data Model:</strong><br />
              Organizes data into tables with rows and columns.<br />
              Each row represents a unique record (e.g., object or event).<br />
              Each column represents an attribute of the record.<br />
              Relationships exist between columns within a row.
            </p>
            <p className="mt-2">
              <strong>Excel Spreadsheet Example:</strong><br />
              A single sheet is a two-dimensional table.<br />
              Each row represents one object/event (e.g., a customer).<br />
              Each column contains the same type of data (e.g., customer ID, name).<br />
              Relationships between columns enable structured querying.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">5. Describe the relationship between Data, Information, and Knowledge as per the slides. (3 marks)</h3>
            <p className="mt-2">
              <strong>Data:</strong><br />
              Raw, unstructured facts with no inherent meaning.<br />
              Example: A customer&apos;s purchase date.
            </p>
            <p className="mt-2">
              <strong>Information:</strong><br />
              Processed or organized data with meaning.<br />
              Example: Summarizing purchase dates to show trends.
            </p>
            <p className="mt-2">
              <strong>Knowledge:</strong><br />
              Insights derived from information.<br />
              Example: Using trends to inform marketing strategies.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Section C: Data Warehousing (25 Marks)</h2>

          <div className="mt-4">
            <h3 className="font-semibold">1. Define data warehousing and list three key characteristics. (6 marks)</h3>
            <p className="mt-2">
              Data warehousing is a centralized repository for storing and analyzing large volumes of integrated data for business intelligence.
            </p>
            <p className="mt-2"><strong>Characteristics:</strong></p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Subject-Oriented:</strong> Focuses on specific business areas (e.g., sales).</li>
              <li><strong>Integrated:</strong> Combines data from multiple sources into a unified format.</li>
              <li><strong>Non-Volatile:</strong> Stores stable, historical data not updated in real-time.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">2. Explain two reasons why businesses need data warehousing. Provide an example for each. (6 marks)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Centralized Data Storage:</strong> Consolidates data for unified analysis. <br />Example: Combining sales data from online and physical stores for reporting.</li>
              <li><strong>Historical Analysis:</strong> Enables trend analysis with historical data. <br />Example: Forecasting demand based on 5 years of sales data.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">3. Describe the role of the ETL process in data warehouse architecture. (7 marks)</h3>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>Extract:</strong> Retrieves data from various sources (e.g., databases, APIs).</li>
              <li><strong>Transform:</strong> Cleans, formats, and integrates data (e.g., standardizing date formats, removing duplicates).</li>
              <li><strong>Load:</strong> Transfers processed data into the warehouse for storage.</li>
              <li><strong>Role:</strong> Ensures data is clean, consistent, and ready for analysis.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">5. Detailed Components of Dimensional Data Modeling</h3>
            
            <div className="mt-4">
              <h4 className="font-semibold text-lg">Fact Table:</h4>
              <p className="mt-2">
                <strong>Definition:</strong> A table that stores quantitative, measurable data (metrics) about a business process, such as sales amounts or order quantities.
              </p>
              <p className="mt-2">
                <strong>Purpose:</strong> Captures numerical data for analysis, like revenue or units sold.
              </p>
              <p className="mt-2"><strong>Components:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Contains measurable facts (e.g., sales revenue, quantity).</li>
                <li>Includes foreign keys linking to dimension tables for context.</li>
                <li>Example: A fact table for sales might include columns like sales_amount, quantity_sold, date_id, product_id, customer_id.</li>
              </ul>
              
              <div className="mt-4">
                <h5 className="font-semibold">Grain (Detail Level):</h5>
                <p className="mt-2">
                  <strong>Definition:</strong> The level of detail or granularity of the data in the fact table, defining the finest level of measurement.
                </p>
                <p className="mt-2">
                  <strong>Importance:</strong> Determines what each row represents (e.g., one row per sale transaction).
                </p>
                <p className="mt-2"><strong>Examples:</strong></p>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Transactional Grain:</strong> Each row represents a single transaction (e.g., one sale at a specific time).</li>
                  <li><strong>Aggregated Grain:</strong> Each row represents summarized data (e.g., total sales per day).</li>
                  <li>Example: A sales fact table with transactional grain has one row per sale, including sales_amount, date_id, and product_id.</li>
                </ul>
              </div>
              
              <div className="mt-4">
                <h5 className="font-semibold">Primary Key:</h5>
                <p className="mt-2">
                  A unique identifier for each row, often a composite key combining foreign keys from dimension tables or a synthetic key (e.g., sale_id).
                </p>
                <p className="mt-2">
                  Example: In a sales fact table, the primary key might be a composite of date_id, product_id, and customer_id to ensure uniqueness, or a single sale_id.
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg">Dimension Tables:</h4>
              <p className="mt-2">
                <strong>Definition:</strong> Tables that store descriptive attributes providing context to the facts, such as time, customer, or product details.
              </p>
              <p className="mt-2">
                <strong>Purpose:</strong> Enable filtering, grouping, and reporting (e.g., sales by region or month).
              </p>
              <p className="mt-2"><strong>Components:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Contain descriptive fields (e.g., product name, customer location).</li>
                <li>Linked to fact tables via foreign keys.</li>
                <li>Example: A Time dimension table might include date_id, day, month, year.</li>
              </ul>
              
              <div className="mt-4">
                <h5 className="font-semibold">Primary Key:</h5>
                <p className="mt-2">
                  A unique identifier for each row in the dimension table, typically a single column.
                </p>
                <p className="mt-2">
                  Example: In a Product dimension table, the primary key is product_id.
                </p>
              </div>
              
              <div className="mt-4">
                <h5 className="font-semibold">Examples of Dimension Tables:</h5>
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li><strong>Time Dimension:</strong> Columns like date_id, day, month, year.</li>
                  <li><strong>Customer Dimension:</strong> Columns like customer_id, name, location.</li>
                  <li><strong>Product Dimension:</strong> Columns like product_id, name, category.</li>
                </ul>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg">Key Considerations:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Fact tables focus on metrics; dimension tables focus on attributes.</li>
                <li>The grain of the fact table defines the level of analysis (e.g., daily vs. monthly sales).</li>
                <li>Primary keys ensure data integrity and uniqueness in both fact and dimension tables.</li>
                <li>Example: A data warehouse for a retail business might have a fact table (Sales) with grain at the transaction level (one row per sale) and dimension tables like Time, Product, and Customer, each with a unique primary key.</li>
              </ul>
            </div>

            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
              <p className="font-semibold text-blue-800">Exam Tip:</p>
              <p className="text-blue-700">Be ready to define fact and dimension tables, explain grain with an example (e.g., one row per sale), and identify primary keys (e.g., product_id for a Product dimension).</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Section D: Python Libraries for Data Science (25 Marks)</h2>

          <div className="mt-4">
            <h3 className="font-semibold">1. NumPy (Numerical Python) 🔢</h3>
            <p className="mt-2">
              NumPy is the cornerstone for numerical computing in Python. Its primary feature is the powerful N-dimensional array object.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>What it is:</strong> A library for efficient array operations.</li>
              <li><strong>Key Data Structure:</strong> ndarray (N-dimensional array).</li>
              <li><strong>Why use it?</strong> Faster and more memory-efficient than Python lists for numerical operations. Enables vectorization (performing operations on entire arrays).</li>
            </ul>
            
            <div className="mt-4">
              <h4 className="font-semibold">Creating Arrays:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>import numpy as np</div><br/>
                <div># From a list</div>
                <div>a = np.array([1, 2, 3])</div><br/>
                <div># Zeros or Ones</div>
                <div>zeros = np.zeros((3, 4)) # 3x4 array of zeros</div>
                <div>ones = np.ones((2, 2))   # 2x2 array of ones</div><br/>
                <div># Range</div>
                <div>range_arr = np.arange(0, 10, 2) # [0, 2, 4, 6, 8]</div><br/>
                <div># Linearly spaced</div>
                <div>linspace_arr = np.linspace(0, 1, 5) # 5 numbers from 0 to 1</div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Key Attributes & Methods:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>arr.shape:</strong> Returns the dimensions (rows, columns).</li>
                <li><strong>arr.ndim:</strong> Returns the number of dimensions.</li>
                <li><strong>arr.size:</strong> Returns the total number of elements.</li>
                <li><strong>arr.dtype:</strong> Returns the data type of elements.</li>
                <li><strong>arr.reshape(new_shape):</strong> Changes the array's shape without changing its data.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Indexing & Slicing:</h4>
              <p className="mt-2">Similar to Python lists, but can be multi-dimensional.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>arr[0]:</strong> First element.</li>
                <li><strong>arr[1, 2]:</strong> Element at row 1, column 2.</li>
                <li><strong>arr[:2, 1:]:</strong> Rows up to (but not including) 2, columns from 1 to the end.</li>
                <li><strong>Boolean Indexing:</strong> arr[arr  5] - Selects elements greater than 5.</li>
              </ul>
              <p className="mt-2"><strong>Broadcasting:</strong> How NumPy handles operations on arrays of different shapes. Smaller arrays are "broadcast" across the larger array.</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Common Operations:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Element-wise:</strong> +, -, *, /.</li>
                <li><strong>Aggregations:</strong> np.sum(), np.mean(), np.median(), np.std(), np.min(), np.max().</li>
                <li><strong>Stacking:</strong> np.vstack() (vertical), np.hstack() (horizontal).</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">2. Pandas 🐼</h3>
            <p className="mt-2">
              Pandas is built on NumPy and is the go-to library for data manipulation and analysis.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>What it is:</strong> A library for working with structured (tabular) data.</li>
              <li><strong>Key Data Structures:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li>Series: 1D labeled array (like a column).</li>
                  <li>DataFrame: 2D labeled array (like a table or spreadsheet).</li>
                </ul>
              </li>
            </ul>

            <div className="mt-4">
              <h4 className="font-semibold">Creating DataFrames:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>import pandas as pd</div><br/>
                <div># From a dictionary</div>
                
                <div>df = pd.DataFrame(data)</div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Reading Data:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>df_csv = pd.read_csv('your_file.csv')</div>
                <div>df_excel = pd.read_excel('your_file.xlsx')</div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Selection & Indexing:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Columns:</strong> df['ColumnName'] or df[['Col1', 'Col2']].</li>
                <li><strong>Rows (label-based):</strong> df.loc[label] or df.loc[start_label:end_label].</li>
                <li><strong>Rows (integer-based):</strong> df.iloc[index] or df.iloc[start_index:end_index].</li>
                <li><strong>Combined:</strong> df.loc[rows, columns].</li>

              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Handling Missing Data:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>df.isnull():</strong> Checks for missing values (returns boolean DataFrame).</li>
                <li><strong>df.dropna():</strong> Removes rows/columns with NaN.</li>
                <li><strong>df.fillna(value):</strong> Fills NaN values.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Grouping & Aggregating:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>df.groupby('ColumnName'):</strong> Groups data based on a column.</li>
                <li>Often used with aggregate functions: df.groupby('Category')['Value'].sum().</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Merging & Joining:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>pd.merge(df1, df2, on='KeyColumn', how='inner'):</strong> Combines DataFrames similar to SQL joins.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Common Methods:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>df.head():</strong> Shows the first 5 rows.</li>
                <li><strong>df.tail():</strong> Shows the last 5 rows.</li>
                <li><strong>df.info():</strong> Provides a summary (data types, non-null counts).</li>
                <li><strong>df.describe():</strong> Generates descriptive statistics.</li>
                <li><strong>df.sort_values(by='ColumnName'):</strong> Sorts the DataFrame.</li>
                <li><strong>df.apply(function):</strong> Applies a function along an axis.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">3. Matplotlib 📈</h3>
            <p className="mt-2">
              Matplotlib is the most widely used library for creating static, animated, and interactive visualizations in Python.
            </p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li><strong>What it is:</strong> A plotting library.</li>
              <li><strong>Key Module:</strong> matplotlib.pyplot (often imported as plt).</li>
            </ul>

            <div className="mt-4">
              <h4 className="font-semibold">Basic Plots:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>import matplotlib.pyplot as plt</div><br/>
                <div>x = [1, 2, 3, 4]</div>
                <div>y = [10, 20, 25, 30]</div><br/>
                <div># Line Plot</div>
                <div>plt.plot(x, y)</div>
                <div>plt.title("Simple Line Plot")</div>
                <div>plt.xlabel("X-axis")</div>
                <div>plt.ylabel("Y-axis")</div>
                <div>plt.legend(['Data Line'])</div>
                <div>plt.show()</div><br/>
                <div># Scatter Plot</div>
                <div>plt.scatter(x, y)</div>
                <div>plt.show()</div><br/>
                <div># Bar Chart</div>
                <div>categories = ['A', 'B', 'C']</div>
                <div>values = [5, 7, 3]</div>
                <div>plt.bar(categories, values)</div>
                <div>plt.show()</div><br/>
                <div># Histogram (shows distribution)</div>
                <div>data = np.random.randn(1000)</div>
                <div>plt.hist(data, bins=30)</div>
                <div>plt.show()</div>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Customization:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>plt.title():</strong> Sets the plot title.</li>
                <li><strong>plt.xlabel(), plt.ylabel():</strong> Sets axis labels.</li>
                <li><strong>plt.legend():</strong> Displays a legend.</li>
                <li><strong>plt.grid(True):</strong> Adds a grid.</li>
                <li><strong>plt.figure(figsize=(width, height)):</strong> Sets the figure size.</li>
                <li><strong>plt.subplots():</strong> Creates multiple plots in one figure.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">4. SciPy (Skewness & Kurtosis) 📊</h3>
            <p className="mt-2">
              SciPy builds on NumPy and provides a large number of functions for scientific and technical computing. scipy.stats is crucial for statistics.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold">Skewness:</h4>
              <p className="mt-2">Measures the asymmetry of a distribution.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Positive Skew (&gt; 0):</strong> Tail is longer on the right (mean &gt; median).</li>
                <li><strong>Negative Skew (&lt; 0):</strong> Tail is longer on the left (mean &lt; median).</li>
                <li><strong>Zero Skew (≈ 0):</strong> Symmetrical (like a normal distribution).</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Kurtosis:</h4>
              <p className="mt-2">Measures the "tailedness" or "peakedness" of a distribution compared to a normal distribution.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Leptokurtic (&gt; 0):</strong> Sharper peak, heavier tails (more outliers).</li>
                <li><strong>Platykurtic (&lt; 0):</strong> Flatter peak, lighter tails (fewer outliers).</li>
                <li><strong>Mesokurtic (&asymp; 0):</strong> Normal distribution shape (Fisher's definition sets normal kurtosis to 0; Pearson's sets it to 3). SciPy uses Fisher's by default.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Calculation:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>from scipy import stats</div>
                <div>import numpy as np</div><br/>
                <div>data = np.random.randn(100) * 2 + 50 # Example data</div>
                <div>skew = stats.skew(data)</div>
                <div>kurt = stats.kurtosis(data) # Fisher's (normal = 0)</div>

              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Section E: Hypothesis Testing & Statistical Analysis (25 Marks)</h2>

          <div className="mt-4">
            <h3 className="font-semibold">1. Hypothesis Testing & Interpretation 🤔</h3>
            <p className="mt-2">
              Hypothesis testing is a formal procedure for investigating our ideas about the world using statistics.
            </p>

            <div className="mt-4">
              <h4 className="font-semibold">Null Hypothesis (H₀):</h4>
              <p className="mt-2">This is the default assumption or statement of no effect/difference. It's what we try to disprove.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Example (t-test): The means of the two groups are equal (μ₁ = μ₂).</li>
                <li>Example (Chi-square): There is no association between the two variables.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Alternative Hypothesis (H₁ or Hₐ):</h4>
              <p className="mt-2">This is the claim we are testing. It's what we accept if we have enough evidence to reject the null hypothesis.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Example (t-test): The means of the two groups are not equal (μ₁ ≠ μ₂).</li>
                <li>Example (Chi-square): There is an association between the two variables.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">P-value:</h4>
              <p className="mt-2"><strong>Definition:</strong> The p-value is the probability of observing your data (or something more extreme) if the null hypothesis (H₀) were true.</p>
              <p className="mt-2"><strong>Interpretation:</strong></p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Low p-value (p≤α):</strong> This means it's unlikely we would see our results just by chance if H₀ were true. Therefore, we reject the null hypothesis (H₀) and conclude there is a statistically significant result (we support H₁).</li>
                <li><strong>High p-value (p{">"}α):</strong> This means it's likely we could see our results just by chance if H₀ were true. Therefore, we fail to reject the null hypothesis (H₀). This doesn't prove H₀ is true, just that we don't have enough evidence to say it's false.</li>
              </ul>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Significance Level (α):</h4>
              <p className="mt-2">This is a pre-determined threshold (commonly 0.05 or 5%). It's the risk we're willing to take of making a Type I error.</p>
            </div>

            <div className="mt-4">
              <h4 className="font-semibold">Errors:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Type I Error (False Positive):</strong> Rejecting H₀ when it's actually true. The probability of this is α.</li>
                <li><strong>Type II Error (False Negative):</strong> Failing to reject H₀ when it's actually false.</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold">Section F: Statistical Tests & Analysis (25 Marks)</h2>

          <div className="mt-4">
            <h3 className="font-semibold">1. T-test 🔬</h3>
            <p className="mt-2">
              <strong>Purpose:</strong> Compares the means of one or two groups.
            </p>
            <p className="mt-2">
              <strong>Assumptions:</strong> Data is continuous, samples are random, data is approximately normally distributed, variances are similar (for independent t-test, though Welch's t-test handles unequal variances).
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Types:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>One-Sample:</strong> Compares one group's mean to a known value. stats.ttest_1samp()</li>
                <li><strong>Independent Samples:</strong> Compares means of two unrelated groups. stats.ttest_ind()</li>
                <li><strong>Paired Samples:</strong> Compares means of two related groups (e.g., before/after). stats.ttest_rel()</li>
              </ul>
            </div>
            <p className="mt-2">
              <strong>Interpretation:</strong> Look at the p-value. If p≤0.05, reject H₀ and conclude there's a significant difference in means. The t-statistic indicates the size of the difference relative to the variation.
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">2. F-test</h3>
            <p className="mt-2">
              <strong>Purpose:</strong> Primarily used to compare the variances of two groups, or as the underlying test in ANOVA to compare means of 3+ groups.
            </p>
            <p className="mt-2">
              <strong>Assumptions:</strong> Samples are independent, populations are normally distributed.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Interpretation:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>For variances:</strong> The F-statistic is the ratio of variances (s₁²/s₂²). If it's close to 1, variances are similar. Look at the p-value; if p≤0.05, reject H₀ (that variances are equal).</li>
                <li><strong>In ANOVA:</strong> See ANOVA section below.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">3. ANOVA (Analysis of Variance)</h3>
            <p className="mt-2">
              <strong>Purpose:</strong> Compares the means of three or more groups.
            </p>
            <p className="mt-2">
              <strong>Assumptions:</strong> Samples are independent, data within groups is normally distributed, homoscedasticity (variances are equal across groups - can be checked with Levene's test or Bartlett's test).
            </p>
            <p className="mt-2">
              <strong>How it works:</strong> It tests if the variance between groups is significantly larger than the variance within groups.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Types:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>One-Way ANOVA:</strong> One categorical independent variable. stats.f_oneway()</li>
                <li><strong>Two-Way ANOVA:</strong> Two categorical independent variables (tests main effects and interaction).</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Interpretation:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Look at the F-statistic and its associated p-value.</li>
                <li>If p≤0.05, reject H₀ (that all group means are equal). This tells you at least one group mean is different.</li>
                <li>If significant, perform post-hoc tests (e.g., Tukey's HSD) to find out which specific pairs of groups have different means.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">4. Chi-square Test (χ²)</h3>
            <p className="mt-2">
              <strong>Purpose:</strong> Used for categorical data.
            </p>
            <p className="mt-2">
              <strong>Assumptions:</strong> Data is frequencies/counts, observations are independent, expected frequency in each cell is &gt; 5.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Types:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Goodness-of-Fit:</strong> Tests if the observed proportions for one categorical variable match expected proportions. stats.chisquare()</li>
                <li><strong>Test for Independence:</strong> Tests if there is an association (relationship) between two categorical variables. stats.chi2_contingency()</li>
              </ul>
            </div>
            <p className="mt-2">
              <strong>Interpretation:</strong> Look at the Chi-square statistic and its p-value. If p≤0.05, reject H₀ (of no association/good fit) and conclude there is a statistically significant association between the variables (or the fit is poor).
            </p>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">5. Linear Regression 📉</h3>
            <p className="mt-2">
              <strong>Purpose:</strong> Models the linear relationship between a dependent (outcome) variable and one or more independent (predictor) variables.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Types:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Simple:</strong> One independent variable (y = β₀ + β₁x + ε)</li>
                <li><strong>Multiple:</strong> Two or more independent variables (y = β₀ + β₁x₁ + β₂x₂ + ... + ε)</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Key Concepts:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>β₀ (Intercept):</strong> Predicted value of y when all x are 0.</li>
                <li><strong>βᵢ (Coefficients/Slopes):</strong> The change in y for a one-unit change in xᵢ, holding other variables constant.</li>
                <li><strong>ε (Error Term):</strong> The part of y not explained by the model.</li>
              </ul>
            </div>
            <p className="mt-2">
              <strong>Goal:</strong> Find the line (or plane) that minimizes the Sum of Squared Errors (SSE).
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Interpretation:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Coefficients:</strong> Are they positive or negative? How large are they? Are they statistically significant (check their p-values)?</li>
                <li><strong>R² (R-squared):</strong> The proportion of variance in the dependent variable (y) that is explained by the independent variable(s) (x). Ranges from 0 to 1. A higher R² indicates a better fit, but doesn't guarantee a good model.</li>
                <li><strong>F-test (Overall Significance):</strong> Checks if at least one predictor variable is significantly related to the outcome. Look at its p-value.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Assumptions:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Linearity:</strong> The relationship between x and y is linear.</li>
                <li><strong>Independence:</strong> Observations are independent.</li>
                <li><strong>Homoscedasticity:</strong> Errors have constant variance.</li>
                <li><strong>Normality:</strong> Errors are normally distributed.</li>
              </ul>
              <p className="mt-2">Check these using residual plots.</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">6. SQL Queries 💾</h3>
            <p className="mt-2">
              SQL (Structured Query Language) is used to communicate with databases. For analysis, you'll mainly be retrieving data.
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Basic Structure:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>SELECT column1, column2, ... -- Columns you want</div>
                <div>FROM table_name             -- Table to get data from</div>
                <div>WHERE condition              -- Filter rows (e.g., Age &gt; 30)</div>
                <div>GROUP BY column_name         -- Group rows for aggregate functions</div>
                <div>HAVING condition_on_groups   -- Filter groups (after GROUP BY)</div>
                <div>ORDER BY column_name [ASC|DESC]; -- Sort the results</div>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Key Clauses & Functions:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>SELECT *:</strong> Selects all columns.</li>
                <li><strong>SELECT DISTINCT column:</strong> Selects only unique values.</li>
                <li><strong>WHERE:</strong> Uses operators like =, !=, &gt;, &lt;, &gt;=, &lt;=, LIKE (pattern matching), IN (list of values), BETWEEN. Use AND and OR to combine conditions.</li>
                <li><strong>Aggregate Functions:</strong> (used with GROUP BY or on their own):
                  <ul className="list-disc ml-6 mt-1">
                    <li>COUNT(): Counts rows or non-null values.</li>
                    <li>SUM(): Sums values.</li>
                    <li>AVG(): Calculates the average.</li>
                    <li>MIN(): Finds the minimum value.</li>
                    <li>MAX(): Finds the maximum value.</li>
                  </ul>
                </li>
                <li><strong>ORDER BY:</strong> Sorts results (ASC = ascending, DESC = descending).</li>
                <li><strong>LIMIT number:</strong> Restricts the number of rows returned (syntax may vary, e.g., TOP in SQL Server).</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">JOINs (Combining Tables):</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>INNER JOIN:</strong> Returns rows when there is a match in both tables.</li>
                <li><strong>LEFT JOIN:</strong> Returns all rows from the left table, and matched rows from the right table (or NULL if no match).</li>
                <li><strong>RIGHT JOIN:</strong> Returns all rows from the right table, and matched rows from the left table.</li>
                <li><strong>FULL OUTER JOIN:</strong> Returns all rows when there is a match in either table.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Example:</h4>
              <div className="bg-gray-100 p-4 rounded mt-2 font-mono text-sm">
                <div>SELECT</div>
                <div>    c.CustomerName,</div>
                <div>    COUNT(o.OrderID) AS NumberOfOrders</div>
                <div>FROM Customers c</div>
                <div>LEFT JOIN Orders o ON c.CustomerID = o.CustomerID</div>
                <div>WHERE c.Country = 'Germany'</div>
                <div>GROUP BY c.CustomerName</div>
                <div>HAVING COUNT(o.OrderID) &gt; 5</div>
                <div>ORDER BY NumberOfOrders DESC;</div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold">7. Data Warehousing 🏢</h3>
            <p className="mt-2">
              <strong>What it is:</strong> A system used for reporting and data analysis. It acts as a central repository of integrated data from one or more disparate sources.
            </p>
            <p className="mt-2">
              <strong>Purpose:</strong> To support business intelligence (BI) activities. Optimized for querying and analysis (OLAP - Online Analytical Processing), not transaction processing (OLTP).
            </p>
            <div className="mt-4">
              <h4 className="font-semibold">Key Characteristics:</h4>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Subject-Oriented:</strong> Data is organized around major subjects (e.g., Customer, Product, Sales) rather than business processes.</li>
                <li><strong>Integrated:</strong> Data from various sources is made consistent (naming conventions, units, encoding).</li>
                <li><strong>Time-Variant:</strong> Data is kept over long periods, allowing for historical analysis and trend-spotting. It always has a time dimension.</li>
                <li><strong>Non-Volatile:</strong> Data in the warehouse is not updated in real-time. It's loaded periodically and is typically read-only. Once in, it doesn't change.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">ETL (Extract, Transform, Load):</h4>
              <p className="mt-2">The core process for getting data into a warehouse.</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li><strong>Extract:</strong> Retrieves data from various sources (e.g., databases, APIs).</li>
                <li><strong>Transform:</strong> Cleans, formats, and integrates data (e.g., standardizing date formats, removing duplicates).</li>
                <li><strong>Load:</strong> Transferring the transformed data into the data warehouse.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">Data Mart:</h4>
              <p className="mt-2">
                A subset of a data warehouse focused on a specific business line, department, or subject area (e.g., a Marketing data mart). It's smaller and often easier for specific teams to use.
              </p>
            </div>
          </div>
        </section>

        <StatisticalTests />
        <MachineLearning />

        <footer className="pt-8 border-t text-sm text-gray-500">
          <p>Note Viewer – Powered by Next.js and Tailwind CSS</p>
        </footer>
      </div>
    </main>
  );
}
import React from "react";

export default function StatisticalTests() {
  return (
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
            <li><strong>Extract:</strong> Pulling data from source systems (databases, flat files, APIs).</li>
            <li><strong>Transform:</strong> Cleaning, standardizing, integrating, and structuring the data (this is often the most complex step).</li>
            <li><strong>Load:</strong> Inserting the transformed data into the data warehouse.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Data Mart:</h4>
          <p className="mt-2">
            A subset of a data warehouse focused on a specific business line, department, or subject area (e.g., a Marketing data mart). It's smaller and often easier for specific teams to use.
          </p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Schema Types:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Star Schema:</strong> A central fact table (containing measures/metrics) linked to multiple dimension tables (containing descriptive attributes). Simple and fast for querying.</li>
            <li><strong>Snowflake Schema:</strong> Similar to a star schema, but dimension tables are normalized, meaning they are broken down into further tables. More complex but saves space.</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 
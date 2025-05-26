import React from "react";

export default function MachineLearning() {
  return (
    <section>
      <h2 className="text-xl font-semibold">Section G: Machine Learning (25 Marks)</h2>

      <div className="mt-4">
        <h3 className="font-semibold">1. Introduction to Machine Learning</h3>
        <p className="mt-2">
          <strong>Definition:</strong> Machine Learning (ML) is a subset of artificial intelligence where systems learn from data to make predictions or decisions without explicit programming.
        </p>
        <p className="mt-2">
          <strong>Core Idea:</strong> Algorithms identify patterns in data to improve performance on tasks over time.
        </p>
        <div className="mt-4">
          <h4 className="font-semibold">Key Components:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Data:</strong> Input for training and testing (e.g., customer purchase history).</li>
            <li><strong>Algorithms:</strong> Mathematical models to learn patterns (e.g., decision trees).</li>
            <li><strong>Training:</strong> Process of feeding data to refine model predictions.</li>
            <li><strong>Prediction:</strong> Using trained models to infer outcomes on new data.</li>
          </ul>
        </div>
        <p className="mt-2">
          <strong>Example:</strong> Predicting customer churn based on historical behavior.
        </p>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">Exam Tip:</p>
          <p className="text-blue-700">Emphasize ML as data-driven learning for predictions, distinct from traditional rule-based programming.</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">2. Applications of Machine Learning</h3>
        <div className="mt-4">
          <h4 className="font-semibold">Healthcare:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Disease prediction (e.g., diagnosing diabetes from patient data).</li>
            <li>Medical image analysis (e.g., detecting tumors in X-rays).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Finance:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Fraud detection (e.g., identifying suspicious transactions).</li>
            <li>Credit scoring (e.g., predicting loan repayment likelihood).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Retail:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Recommendation systems (e.g., Netflix suggesting movies).</li>
            <li>Inventory management (e.g., forecasting demand).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Marketing:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Customer segmentation (e.g., grouping users by behavior).</li>
            <li>Sentiment analysis (e.g., analyzing social media feedback).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Transportation:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Autonomous vehicles (e.g., self-driving car navigation).</li>
            <li>Route optimization (e.g., delivery logistics).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Other:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Natural language processing (e.g., chatbots like Grok).</li>
            <li>Predictive maintenance (e.g., detecting equipment failures).</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">Exam Tip:</p>
          <p className="text-blue-700">Know 2-3 applications per industry with specific examples for versatility in answers.</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">3. Types of Machine Learning</h3>
        <div className="mt-4">
          <h4 className="font-semibold">Supervised Learning:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Uses labeled data (input-output pairs) to predict outcomes.</li>
            <li>Examples: Classification (e.g., spam detection), Regression (e.g., house price prediction).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Unsupervised Learning:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Uses unlabeled data to find patterns or groupings.</li>
            <li>Examples: Clustering (e.g., customer segmentation), Dimensionality reduction (e.g., PCA).</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Reinforcement Learning:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Agent learns by interacting with an environment, optimizing rewards.</li>
            <li>Example: Training a robot to navigate a maze via trial and error.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Semi-Supervised Learning (less common):</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Combines labeled and unlabeled data for training.</li>
            <li>Example: Labeling a small subset of images and using unlabeled images to improve model accuracy.</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">Exam Tip:</p>
          <p className="text-blue-700">Focus on supervised and unsupervised for most exams; know one example and algorithm per type (e.g., Linear Regression for supervised, K-Means for unsupervised).</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">4. Supervised Machine Learning Process</h3>
        <div className="mt-4">
          <h4 className="font-semibold">Steps:</h4>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li><strong>Data Collection:</strong> Gather labeled dataset (e.g., house prices with features like size, location).</li>
            <li><strong>Data Preprocessing:</strong> Clean and prepare data (e.g., handle missing values, normalize features).</li>
            <li><strong>Feature Selection/Engineering:</strong> Choose or create relevant features to improve model performance.</li>
            <li><strong>Model Selection:</strong> Pick an algorithm (e.g., Linear Regression, Decision Trees).</li>
            <li><strong>Training:</strong> Feed training data to the model to learn patterns.</li>
            <li><strong>Evaluation:</strong> Assess model on test data using metrics (e.g., accuracy for classification, RMSE for regression).</li>
            <li><strong>Tuning:</strong> Adjust hyperparameters (e.g., learning rate) to optimize performance.</li>
            <li><strong>Prediction:</strong> Deploy model to make predictions on new data.</li>
          </ol>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Example:</h4>
          <p className="mt-2">Predicting customer churn:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Collect labeled data (customer features, churn status).</li>
            <li>Preprocess (encode categories, scale features).</li>
            <li>Train a Logistic Regression model.</li>
            <li>Evaluate using F1-score.</li>
            <li>Predict churn for new customers.</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">Exam Tip:</p>
          <p className="text-blue-700">Memorize the sequence (Collect → Preprocess → Feature Engineer → Select Model → Train → Evaluate → Tune → Predict) and link to a use case.</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">5. Dive into Regression</h3>
        <p className="mt-2">
          <strong>Definition:</strong> A supervised learning technique to predict continuous numerical outcomes.
        </p>
        <div className="mt-4">
          <h4 className="font-semibold">Types:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Linear Regression:</strong> Models linear relationship between features and outcome (e.g., predicting house prices).</li>
            <li><strong>Polynomial Regression:</strong> Fits non-linear relationships using polynomial features.</li>
            <li><strong>Ridge/Lasso Regression:</strong> Regularized versions to prevent overfitting.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Key Components:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Features:</strong> Independent variables (e.g., house size, number of bedrooms).</li>
            <li><strong>Target:</strong> Continuous dependent variable (e.g., house price).</li>
            <li><strong>Model:</strong> Equation like y = β₀ + β₁x₁ + β₂x₂ + ... (Linear Regression).</li>
            <li><strong>Loss Function:</strong> Mean Squared Error (MSE) to minimize prediction errors.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Process:</h4>
          <ol className="list-decimal ml-6 mt-2 space-y-1">
            <li>Collect data (e.g., house features and prices).</li>
            <li>Preprocess (e.g., scale features).</li>
            <li>Train model to minimize MSE.</li>
            <li>Evaluate using metrics like RMSE, R².</li>
            <li>Predict for new data (e.g., price for a new house).</li>
          </ol>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Example:</h4>
          <p className="mt-2">Predicting sales revenue based on advertising spend and store location.</p>
          <p className="mt-2">Model: revenue = β₀ + β₁*ad_spend + β₂*location_score.</p>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Metrics:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Mean Squared Error (MSE):</strong> Average of squared prediction errors.</li>
            <li><strong>Root Mean Squared Error (RMSE):</strong> Square root of MSE, interpretable in original units.</li>
            <li><strong>R² Score:</strong> Proportion of variance explained by the model (0 to 1).</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">Exam Tip:</p>
          <p className="text-blue-700">Know Linear Regression&apos;s equation, purpose (continuous prediction), and metrics (MSE, RMSE, R²). Be ready to explain with an example.</p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold">6. Feature Engineering</h3>
        <p className="mt-2">
          <strong>Definition:</strong> The process of creating, selecting, or transforming features to improve model performance and interpretability.
        </p>
        <div className="mt-4">
          <h4 className="font-semibold">Purpose:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Enhances model accuracy by providing relevant input features.</li>
            <li>Reduces noise by selecting important features.</li>
            <li>Captures domain-specific patterns.</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Techniques:</h4>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li><strong>Feature Creation:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Example: Creating &quot;total_spend&quot; by summing monthly customer purchases.</li>
              </ul>
            </li>
            <li><strong>Feature Transformation:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Example: Log-transforming skewed data (e.g., income) for normality.</li>
              </ul>
            </li>
            <li><strong>Feature Encoding:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Example: One-hot encoding categorical variables (e.g., &quot;region&quot; into binary columns).</li>
              </ul>
            </li>
            <li><strong>Feature Scaling:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Example: Normalizing features (e.g., age, income) to a 0-1 range for algorithms like SVM.</li>
              </ul>
            </li>
            <li><strong>Feature Selection:</strong>
              <ul className="list-disc ml-6 mt-1">
                <li>Example: Removing low-variance features or using correlation analysis to reduce redundancy.</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Example:</h4>
          <p className="mt-2">For house price prediction:</p>
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Create feature: &quot;price_per_sqft&quot; = house price ÷ square footage.</li>
            <li>Encode: Convert &quot;neighborhood&quot; into dummy variables.</li>
            <li>Scale: Normalize &quot;square_footage&quot; to 0-1 range.</li>
          </ul>
        </div>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400">
          <p className="font-semibold text-blue-800">Exam Tip:</p>
          <p className="text-blue-700">Memorize 2-3 techniques (e.g., encoding, scaling) and their purpose. Link to regression (e.g., scaling improves Linear Regression performance).</p>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold text-blue-800">Exam Questions & Answers</h3>
        
        <div className="mt-6">
          <h4 className="font-semibold">Question 1: Define machine learning and explain two real-world applications. (7 marks)</h4>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Answer:</p>
            <p className="mt-2"><strong>Definition:</strong> Machine learning is a subset of AI where systems learn from data to make predictions or decisions without explicit programming.</p>
            <div className="mt-4">
              <p className="font-semibold">Applications:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Fraud Detection:</strong> Identifies suspicious transactions using patterns in financial data.<br/>
                  <span className="text-gray-600">Example: Banks using ML to flag unusual credit card activity.</span>
                </li>
                <li>
                  <strong>Recommendation Systems:</strong> Suggests products based on user behavior.<br/>
                  <span className="text-gray-600">Example: Netflix recommending movies based on viewing history.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Question 2: List and briefly describe the three main types of machine learning. (6 marks)</h4>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Answer:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li>
                <strong>Supervised Learning:</strong> Uses labeled data to predict outcomes.<br/>
                <span className="text-gray-600">Example: Predicting house prices with Linear Regression.</span>
              </li>
              <li>
                <strong>Unsupervised Learning:</strong> Finds patterns in unlabeled data.<br/>
                <span className="text-gray-600">Example: Clustering customers with K-Means.</span>
              </li>
              <li>
                <strong>Reinforcement Learning:</strong> Learns by maximizing rewards in an environment.<br/>
                <span className="text-gray-600">Example: Training a robot to navigate via trial and error.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Question 3: What is regression in machine learning? (3 marks)</h4>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Answer:</p>
            <ul className="list-disc ml-6 mt-2 space-y-1">
              <li>Regression predicts continuous numerical outcomes.</li>
              <li>Uses labeled data to model relationships between features and target.</li>
              <li>Example: Predicting house prices based on size and location.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Question 4: Outline the supervised machine learning process in four steps. (4 marks)</h4>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Answer:</p>
            <ol className="list-decimal ml-6 mt-2 space-y-2">
              <li>
                <strong>Data Collection:</strong> Gather labeled dataset<br/>
                <span className="text-gray-600">Example: Customer data with churn labels</span>
              </li>
              <li>
                <strong>Preprocessing:</strong> Clean and prepare data<br/>
                <span className="text-gray-600">Example: Handle missing values</span>
              </li>
              <li>
                <strong>Training:</strong> Use data to train a model<br/>
                <span className="text-gray-600">Example: Logistic Regression</span>
              </li>
              <li>
                <strong>Evaluation:</strong> Assess performance with metrics<br/>
                <span className="text-gray-600">Example: Accuracy</span>
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-semibold">Question 5: Explain feature engineering with two techniques and their benefits. (5 marks)</h4>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold">Answer:</p>
            <p className="mt-2"><strong>Feature Engineering:</strong> Creating or transforming features to improve model performance.</p>
            <div className="mt-4">
              <p className="font-semibold">Techniques:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>
                  <strong>Feature Creation:</strong> Compute new features<br/>
                  <span className="text-gray-600">Example: &quot;price_per_sqft&quot; from price and area</span><br/>
                  <span className="text-gray-600">Benefit: Captures domain-specific patterns for better predictions</span>
                </li>
                <li>
                  <strong>Feature Scaling:</strong> Normalize features to a standard range<br/>
                  <span className="text-gray-600">Example: Scale to 0-1 range</span><br/>
                  <span className="text-gray-600">Benefit: Improves convergence for algorithms like Linear Regression</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 
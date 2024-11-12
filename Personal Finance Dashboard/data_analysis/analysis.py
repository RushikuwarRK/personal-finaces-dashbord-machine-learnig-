import pandas as pd
from model import train_model, predict, load_data
from prophet import Prophet


# Load the data
data = load_data()

# Train the model
model = train_model(data)

# Predict future spending for the next 12 months
forecast = predict(model)

# Output the forecast
print(forecast)

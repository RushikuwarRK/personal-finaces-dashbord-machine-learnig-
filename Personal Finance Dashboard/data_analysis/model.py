import pandas as pd
from prophet import Prophet


def train_model(data):
    # Prepare the data for Prophet
    data = data[['month', 'amount']]
    data.columns = ['ds', 'y']
    model = Prophet()
    model.fit(data)
    return model

def predict(model, future_periods=12):
    future = model.make_future_dataframe(periods=future_periods, freq='M')
    forecast = model.predict(future)
    return forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']]

def load_data():
    data = pd.read_csv('data_analysis/aggregated_data.csv')
    return data

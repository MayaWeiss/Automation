from selenium import webdriver
from selenium.webdriver.common.by import By

class SubmittedPage:
    def __init__(self, driver:webdriver.Chrome):
        self.driver = driver

    def submitted_message(self):
        return self.driver.find_element(By.CLASS_NAME,"text")

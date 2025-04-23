from selenium import webdriver
from selenium.webdriver.common.by import By

class RegistrationPage:
    def __init__(self, driver:webdriver.Chrome):
        self.driver = driver

    def first_name(self):
        return self.driver.find_element(By.ID,"firstName")

    def first_name_value(self):
        return self.first_name().get_attribute("value")

    def enter_first_name(self,first_name_value):
        self.first_name().send_keys(first_name_value)

    def last_name(self):
        return self.driver.find_element(By.ID,"lastName")

    def last_name_value(self):
        return self.last_name().get_attribute("value")

    def enter_last_name(self,last_name_value):
        self.last_name().send_keys(last_name_value)

    def phone_number(self):
        return self.driver.find_element(By.NAME,"phone")

    def phone_number_value(self):
        return self.phone_number().get_attribute("value")

    def enter_phone_number(self, phone_number_value):
        self.phone_number().send_keys(phone_number_value)

    def email(self):
        return self.driver.find_element(By.CSS_SELECTOR,"input[type='email']")

    def email_value(self):
        return self.email().get_attribute("value")

    def enter_email(self, email_value):
        self.email().send_keys(email_value)

    def kind_of_activity_radio_button(self):
        return self.driver.find_elements(By.NAME,"kindOfActivity")

    def choose_kind_of_activity(self, activity_value):
        activity = self.driver.find_element(By.CSS_SELECTOR,f"input[value={activity_value}]")
        activity.click()

    def send_button(self):
        return self.driver.find_element(By.CSS_SELECTOR,"input[type='submit']")

    def click_send(self):
        self.send_button().click()

from selenium import webdriver
from selenium.webdriver.common.by import By

class HomePage:
    def __init__(self, driver:webdriver.Chrome):
        self.driver = driver

    def menu(self):
        return self.driver.find_element(By.CLASS_NAME,"hamburger-menu")

    def click_on_menu(self):
        return self.menu().click()

    def registration_link(self):
        return self.driver.find_element(By.LINK_TEXT,"Registration")

    def click_on_registration(self):
        return self.registration_link().click()

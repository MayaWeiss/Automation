from selenium import webdriver
from HomePage import HomePage
from RegistrationPage import RegistrationPage
from SubmittedPage import SubmittedPage
from time import sleep

driver = webdriver.Chrome()
driver.maximize_window()
driver.get("http://127.0.0.1:5500/index.html")
driver.implicitly_wait(10)

#creating an objects
home_page = HomePage(driver)
registration = RegistrationPage(driver)
submitted =  SubmittedPage(driver)

home_page.click_on_menu()
sleep(1)
home_page.click_on_registration()

#Check that every input in the form is empty
assert registration.first_name_value() == "", "First name default input is not empty"
assert registration.last_name_value() == "", "Last name default input is not empty"
assert registration.phone_number_value() == "", "Phone number default input is not empty"
assert registration.email_value() == "", "Email address default input is not empty"
assert not registration.kind_of_activity_radio_button()[0].is_selected(), "The 'math' button is selected by default"
assert not registration.kind_of_activity_radio_button()[1].is_selected(), "The 'language' button is selected by default"
sleep(1)

#Inserting values to all inputs
registration.enter_first_name("Maya")
registration.enter_last_name("Weiss")
registration.enter_phone_number("054-3333333")
registration.enter_email("test@gmail.com")
registration.choose_kind_of_activity("math")    #choose 'math' or 'language'
sleep(1)

#Checking the amount of radio buttons
amount_of_radio_buttons = len(registration.kind_of_activity_radio_button())
if amount_of_radio_buttons == 2:
    print(f"The amount of radio buttons is: {amount_of_radio_buttons}")
else:
    print("The amount of radio buttons is incorrect")

#Clicking submit and checking the text of the next page element
registration.click_send()
print(f"The submitted message is: {submitted.submitted_message().text}")
assert submitted.submitted_message().text == 'תודה על ההרשמה, בקרוב נשלח עדכונים', 'wrong message'

sleep(3)
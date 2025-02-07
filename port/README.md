You need to install at first the libraries
1. install requirements.txt make sure you are in folder port
2. then bash in terminal pip install -r requirements.txt
3. then bash py manage.py makemigrations
4. then bash py manage.py migrate
5. then bash py manage.py createsuperuser
6. example user admin pass 123
7. go to settings replace the Email Host User value by your actual gmail account
8. replace the Email Host Password value by your actual app password
9. go to views.py replace in def home replace the to_email value to your actual gmail account
10. then bash py manage.py runserver
 then access the page http://127.0.0.1:8000
11. navigate to login_admin by adding this in url login_admin/ to access admin dash to upload projects
for example: http://127.0.0.1:8000/login_admin/
12. key features:
    Home page:
    display projects based in uploaded files in Database
    custom cursor
    can send email to host in contact info

    Secret Page:
    you can login to access the admin_dash

    Admin dash:
    can upload new projects
    can edit projects
    can delete existing projects
    can detect how many viewers of home page
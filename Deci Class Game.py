import time
import random 

# Function to increase your points (based on experience and armor)
def points_inc(x):
    global points
    spin_the_wheel()
    
    if armor == "udacity swag":
        pointsincd = (x * (exp/100)) + (x * 50/100)
        points += pointsincd
        
    else:
        pointsincd = x * (exp/100)
        points += pointsincd
        
    return pointsincd


# Function to decrease your points (based on experience)
def points_dec(x):
    global points
    pointsdecd = x * (exp/100)
    points = points - pointsdecd
    return pointsdecd


# function to check if you have less than 0 points
def check():
    if points < 0:
        return "revoked"
    elif exp < 0:
        return "revoked"


# Function to print text in the terminal but with a time delay
def print_delay(text, sec):
    print(text)
    time.sleep(sec)


# Function to print a specified number of line breaks
def linebreak(lines):
    for x in range(lines):
        print("")


# Function to simulate spinning a wheel and possibly acquiring udacity swag
def spin_the_wheel():
    global armor
    luck = 0.9
    if random.random() > luck:
        print_delay("\033[1m" + "CONGRATS, you just became the top of your leaderboard" + "\033[0m", 0)
        print_delay("You have aquired udacity swag", 3)
        print_delay(" (udacity swag gives you 50% points boost)",2)
        armor = "udacity swag"


# Function for taking a quiz
def quiz():
    print_delay("You decided to take a quiz", 2)
    print_delay("answer the following question", 2)
    
    # i used these google forms as a source of the questions and answers (Made by Youssef Abdelaziz in slack):
    #  digital art: https://docs.google.com/forms/d/e/1FAIpQLSd89rjQt5mtljNSMTzUsEcAekvq51dr7T2Ssm_T9JXk_hKe_A/viewform?usp=sf_link
    #  cybersecurity: https://docs.google.com/forms/d/e/1FAIpQLSemKAooBkQBAOrvL4LeXBIfsvqw9birhcRzRZBIiufuWgxwAA/viewform?usp=sf_link
    questions = {
    ("What is the best way to protect your personal information online?",
          "a) Share it with as many people as possible",
        "b) Use strong passwords and multifactor authentication"
        ): "b",

    ("What is regulation in the context of cybersecurity?",
          "a) Laws and regulations that govern how businesses handle private data",
        "b) The process of updating antivirus software on all devices"
        ): "a",

    ("What is BEC (Business Email Compromise)?",
          "a) A way to protect your email account from hackers",
        "b) Where a malicious actor takes over an email account to commit fraud"
        ): "b",

    ("What is the purpose of a grid in graphic design?",
          "a) To create structure and consistency in a design.",
        "b) To add visual interest to a design."
        ): "a",

    ("What is the advantage of using vector graphics?",
          "a) The sizes can be scaled up without getting pixelated.",
        "b) The sizes cannot be scaled up without getting pixelated."
        ): "a",

    ("What is a serif font?",
          "a) A font that doesnt contain a serif or stroke at the end of a letter.",
        "b) A font that contains a serif or stroke at the end of a letter."
        ): "b",
    }
    item = random.choice(list(questions.items()))
    # uses turple to assign each part of key and value to a variable
    (question, choice1, choice2), solution = item
    print_delay(question, 2)
    print_delay(" " + choice1, 2)
    print_delay(" " + choice2, 2)
    answer = ""
    while answer not in ["a","b"]:
        answer = input("insert letter: ")
        
    if answer == solution:
        print_delay("\033[1m" + f"Correct, you have gained {points_inc(50)} points" + "\033[0m", 2)
        
    elif answer != solution:
        print_delay("\033[1m" + f"Wrong, you have lost {points_dec(50)} points" + "\033[0m", 2)
        
    linebreak(1)
    where()


# Function for studying content
def study():
    print_delay("you began to study your content", 2)
    print_delay("studying in progress...", 2)
    luck = {
        "\033[1m" + "you studied well" + "\033[0m" : 100,
        "\033[1m" + "you didn't understand the content that well" + "\033[0m": 50,
        "\033[1m" + "you got lazy and didnt study content" + "\033[0m": 0,
    }
    state, points = random.choice(list(luck.items()))
    print_delay(f"your score:'{state}', you gained {points_inc(points)} points", 2)
    linebreak(1)
    where()


# Function for meeting a session lead (or a bully)
def meet():
    global exp
    print_delay("it is a sunny day outside", 2)
    print_delay("you went to your local coffeshop to drink some coffee", 2)
    print_delay("but you found someone famillar there", 2)
    #repeated session lead multiple times to decrease the chance of bully
    luck =["session lead","session lead","session lead","session lead","bully"]
    person = random.choice(luck)
    
    if person == "bully":
        print_delay("\033[1m" + "oh no, you met your bully there" + "\033[0m", 2)
        print_delay("the bully discouraged and insulted you", 2)
        print_delay(f"you feel unmotivated", 2)
        print_delay("\033[1m" + f"your studying experience has decreased by 2" + "\033[0m", 2)
        exp = exp - 2
        
    elif person == "session lead":
        print_delay("\033[1m" + f"you have met your session lead {session_lead} there" + "\033[0m", 2)
        print_delay(f"{session_lead} was happy to see you", 2)
        print_delay("he decided to give you motivation and some advices", 0)
        print_delay("to help you continue in your journey", 3)
        print_delay("\033[1m" + f"your studying exp has increased by 2" + "\033[0m", 2)
        exp = exp + 2
        
    linebreak(1)
    where()


# Function for taking the FInal assesment
def final():
    print_delay("it's now time to take the final assesment", 2)
    answer = ""
    while answer not in ["y","Y","n","N"]:
        answer = input("are you sure you want to continue?(y/n)")
        
    if answer in ["y","Y"]:
        print_delay("assesment in progress...", 2)
        print_delay("checking assesment results...", 2)
        if points >= 1000:
            print_delay("\033[1m" + f"Congrats {name} You passed the assesment!, you won" + "\033[0m", 2)
            
        elif points < 1000:
            print_delay("you dont have enough points", 2)
            print_delay("\033[1m" + f"Sorry {name} You didnt pass the assesment, you lost" + "\033[0m", 2)
            
    else:
        where()
    linebreak(1)


# Function for DECI introduction
def intro():
    print_delay("\033[1m" + "Welcome To Digital Egypt Cubs Intitiative (aka DECI)" + "\033[0m", 2)
    print_delay("Today you will begin your learning journey", 2)
    print_delay("Here you can study new content", 0)
    print_delay(" and solve quizes through your udacity account to gain points",3)
    print_delay("There is also a chance for you to be top of the leaderboard", 2)
    print_delay("you can also meet with your session lead", 0)
    print_delay(" to gain more experience so you can get more points", 3)
    print_delay("To pass the assesment, you need to have atleast 1000 points", 2)
    linebreak(1)


# The Main menu
def where():
    #checks if you have been revoked
    if check() != "revoked":
        
        print_delay("\033[1m" + f"Welcome {name}, what do you wanna do today?" + "\033[0m", 2)
        print_delay(" Choose 1 to study classroom content", 2)
        print_delay(" Choose 2 to solve some quizes", 2)
        print_delay(" Choose 3 to meet your session lead", 0)
        print_delay("  (warning: a bully might be there,be careful)", 3)
        print_delay(" Choose 4 to take the final assesment and pass DECI", 0)
        print_delay("  (required 1000 points to pass)",3)
        print_delay(" Choose 5 to know your current points and experience", 2)
        
        choise = 0
        while choise not in ["1","2","3","4","5"]:
            choise = input("choose number:")
            
        if choise == "1":
            study()
            
        elif choise == "2":
            quiz()
            
        elif choise == "3":
            meet()
            
        elif choise == "4":
            final()
            
        elif choise == "5":
            print_delay(f"your points are {points}", 2)
            print_delay(f"your exp are {exp}", 2)
            where()
            
    else:
        print_delay("you have lost all your points/exp", 2)
        print_delay("sorry but you have been revoked", 2)


# Function to ask the player if they want to play again
def again():
    global program
    print_delay("want to play again?(y/n)", 2)
    
    answer = ""
    while answer not in ["y","Y","n","N"]:
        answer = input("pls type y or n")
        
    if answer in ["Y","y"]:
        return "on"
        
    elif answer in ["N","n"]:
        return "off"


# Main program
#i used the program on or off method so that the program can be run again when player wants to play again
program = "on"
while program == "on":
    
    # Assigning stats to its default
    points = 1
    exp = 10
    armor = "none"
    session_leads = ["Mahmoud AbdelFatah",
                      "Mohamed Fathallah",
                    "Eslam Ahmed",
                    "Ahmed Sherif"]
    session_lead = random.choice(session_leads)
    intro()
    
    # Assigning name
    name = input("Now tell me, what is your name? ")
    print_delay(f"Nice to meet you {name}, have fun learning!", 2)
    
    linebreak(1)
    where()
    
    program = again()
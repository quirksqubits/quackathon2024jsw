from openai import OpenAI

client = OpenAI(
    # This is the default and can be omitted
    #api_key=os.environ.get("OPENAI_API_KEY"),
    api_key = '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'
  
)
meal=input("What meal will you be cooking? ")
people=input("How many people will you be cooking for? ")
budget=input("What is your budget? ")


completion = client.chat.completions.create(
  model="gpt-3.5-turbo",
  messages=[
    {"role": "system", "content": f"Please provide a {meal} menu for {people} people, with a budget not exceeding {budget} USD per person. First, give the menu, then provide the main ingredients."},
    {"role": "user", "content": f"Please provide a {meal} menu for {people} people, with a budget not exceeding {budget} USD per person. First, give the menu, then provide the main ingredients."}
  ] #you need to upload your promt as message as above, 
  
)

print("\n",completion.choices[0].message.content)
# x=completion.choices[0].message.content
# list=[]
# for i in x:
#   list.append(i)

# chatList = client.chat.completions.create(
#   model="gpt-3.5-turbo",
#   pythonList=[
#   {"role": "system", "content": f"Please provide a {meal} menu for {people} people, with a budget not exceeding {budget} USD per person. Give me the ingredientes in Python list format."},
#   {"role": "user", "content": f"Please provide a {meal} menu for {people} people, with a budget not exceeding {budget} USD per person. Give me the ingredientes in Python list format."}]
# )
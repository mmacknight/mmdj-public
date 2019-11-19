import datetime

# Helper Functions

global table_list
global file_list

def user_input(options):
    selection = input(options+"\nSelection => ")
    print('========================================')
    return selection
    


def add_column():
    col_name = user_input("Column name (ex)\n\tevent_id")
    col_type = user_input("Column value (ex)\n\tvarchar(200)")
    col_default = user_input("Column default (ex)\n\t0 / NULL / 'string'")
    col_extras = user_input("Column extras (ex)\n\tauto_increment / <Enter>")

    for tables, outfile in zip(table_list, files_list):
        for table in tables:
            outfile.write("ALTER TABLE "+table+" ADD "+col_name+" "+col_type+" DEFAULT "+col_default+" "+col_extras+";\n")

def user_choice(options):
    action = int(user_input(options))
    if action == 0:
        return "exit"
    if action == 1:
        add_column()
    else:
        options = options.split(":::")[-1]
        updated_options = "You did not select an appropriate option:::\n"+options
        user_choice(updated_options)
        
def main():
 
    # File Naming Variables
    with open("DONTTOUCH_DATAFILE.dat", "r") as update_number:
        sql_edit_number = update_number.readline()
    with open("DONTTOUCH_DATAFILE.dat", "w+") as update_number:
        update_number.write(str(int(sql_edit_number)+1))
    tables = ["events", "queuedSongs", "songs", "tokens", "users"]
    time = datetime.datetime.now() 
    time_string = time.strftime("%m-%d")
    
    # Output File Setup
    real_script = open("DB_script_"+time_string+"_try_"+str(sql_edit_number), "w+") 
    test_script = open("Test_script_"+time_string+"_try_"+str(sql_edit_number), "w+")
    # Select Database
    real_script.write("use dbozzo;\n")
    test_script.write("use dbozzo;\n")

    # Specify Tables
    table_selection = "Select tables:\n" + \
        "1 - All:\t"+(" ").join(tables)+"\n" + \
        "2 - Specify (ex)\n\tusers events"
    selected_tables = user_input(table_selection)
    if selected_tables != "1":
         tables = selected_tables.split(" ") 
    test_table_extension = "_test_"+sql_edit_number
    test_tables = [table + test_table_extension for table in tables]
    # Duplicate real tables into test tables
    for test_table, table in zip(test_tables, tables):
        sql = "CREATE TABLE " + test_table + " SELECT * FROM " + table + " Limit 100;\n"
        test_script.write(sql)

    # Iterable Setup Data    
    global files_list 
    files_list = [real_script, test_script]
    global table_list 
    table_list = [tables, test_tables]


    # Main Loop
    options = "Select Method:\n"+ \
        "Finish MySQL Script - 0\n" + \
        "Add a column to selected tables - 1"
    while(user_choice(options) != "exit"):
        pass 
   

#open("db_alter_script_"+ ".sql")s

if __name__ == "__main__":
    main()
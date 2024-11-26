import pymysql

def connect(host, port, user, passwd, database):
    global db, cursor
    try:
        db = pymysql.connect(host=host, user=user, passwd=passwd, database=database, port=int(port))
        print('連線成功')
        cursor = db.cursor()
        return True
    except pymysql.Error as e:
        print("連線失敗:" + str(e))
        return False

def select(sql):
    try:
        cursor.execute(sql)
        result = cursor.fetchall()
        return result
    except Exception as e:
        print(f"Error executing select query: {e}")
        return []

def commit(sql):
    try:
        cursor.execute(sql)
        db.commit()
    except Exception as e:
        print(f"Error executing insert query: {e}")
        db.rollback()

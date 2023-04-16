from pyteal import *


def contract():
    
    user_wallet = Txn.sender()
    passenger_wallet = Addr("Passenger_wallet_address")
    ride_cost = Int(5000) # Costo en microAlgos (1 ALGO = 1 millón de microAlgos)
    contract_balance = App.globalGet(Bytes("balance"))

    
    connect_wallet = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.fee() <= Int(1000),
        user_wallet == Addr("User_wallet_address")
    )

    
    pay_for_ride = And(
        Txn.type_enum() == TxnType.Payment,
        Txn.fee() <= Int(1000),
        user_wallet == passenger_wallet, 
        contract_balance >= ride_cost
    )

     = Cond(
        [Global.group_size() == Int(1), connect_wallet],

        [Global.group_size() == Int(2), pay_for_ride] 
    )

    return program
print(contract().teal())
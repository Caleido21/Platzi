class Main {
    public static void main(String[] args) 
    {
        uberX UberX = new uberX("AMD123" , new Account("Enrique Herrera" ,"Hell32") ,"Chevrolet" , "2019");

        UberX.id = 10;

        UberX.setPassenger(3);
        UberX.printData();
        
    }
} 
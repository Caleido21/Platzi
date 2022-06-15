public class Car {
    Integer id;
    String license;
    Account driver;
    private Integer passenger;

    public Car(String license, Account driver)
    {
        this.license = license;
        this.driver = driver;
    } 
    void printData()
    {
        if(passenger != null)
        {
          System.out.println("El conductor es: " + driver.name + "\nLa matricula es: " + license + "\nCon la capacidad de: " + passenger + " pasajeros");

        }

    }

    public Integer getPassenger()
    {
        return passenger;
    }

    public void setPassenger(Integer passenger)
    {
        if(passenger == 4)
        {
            this.passenger = passenger;
        }
        else
        {
            System.out.println("Lo sentimos, no puede registrar un vehiculo de menos de 4 pasajeros"); 
        }
    }
}



class uberX extends Car
{
    String brand;
    String model;
    private Integer passenger;
    public uberX(String license , Account driver, String brand , String model){
        super(license, driver);
        this.brand = brand;
        this.model = model;
    }
    @Override
    public void setPassenger(Integer passenger)
    {
        if(passenger == 6)
        {
            this.passenger = passenger;
            System.out.println("El conductor es: " + driver.name + "\nLa matricula es: " + license + "\nCon la capacidad de: " + passenger + " pasajeros");
        }
        else
        {
            System.out.println("Lo sentimos, no puede registrar un vehiculo de menos de 6 pasajeros"); 
        }
    }
}
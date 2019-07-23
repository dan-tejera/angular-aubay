export function factorial(num: number = 0) :number
{ 
    if (num < 0)
    {
        throw new Error('Número negativo')
    }
    else
    {
        if (parseInt(String(num)) !== parseFloat(String(num))) // Comprobación de que el número no tenga decimales
        {
            throw new Error('Número con decimales')
        }
    }

    if (num <= 1)
    {
        return 1;
    }

    return num * factorial (num-1);
  
}
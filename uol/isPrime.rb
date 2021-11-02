def isPrime(n)
    is_prime = true
    if n == 1
        return is_prime = false
    elsif n == 2 || n == 3
        return is_prime
    end
    i = 2
    while is_prime && i != n do
        if n % i == 0
            is_prime = false
        end
        i+=1
    end
    return is_prime
end

puts isPrime(1) #false
puts isPrime(2) #true
puts isPrime(3) #true
puts isPrime(6) #false
puts isPrime(2111) #true
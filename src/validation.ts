export interface validation{
name:fullName,
dob:object,
placeOfBirth:string,
firstLanguage:string,
address?:Address,
father?:Parent,
mother?:Parent,
emergencyContacts?:[EmergencyContacts]
}

export interface fullName{
    firstName: string,
        middleName: string,
        lastName: string
}
export interface Address{
     city: string,
        state: string,
        country: string,
        pin: string
}

export interface Parent{
      fullName: string,
        email: string,
        educationQualification: string,
        profession: string,
        designation: string,
        phone: number
}

export interface EmergencyContacts{
    arr:[Controls]
}

export interface Controls{
    relation: string,
    number: number
}
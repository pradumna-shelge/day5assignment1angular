export interface validation{
name:fullName,
dob:string,
placeOfBirth:string,
firstLanguage:string,
address:Address,
father:Parent,
mother:Parent,
emergencyContacts:EmergencyContacts[]
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
        pin: number
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
    relation: string,
    monumber: string
}

export interface Controls{
    relation: string,
    monumber: string
}
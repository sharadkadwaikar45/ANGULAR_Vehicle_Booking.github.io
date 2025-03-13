import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class dataService {

  private data = [
    { Id: 1, VendorName: 'ABC Suppliers', ContactPerson: 'Ramesh Kumar', PhoneNumber: '9876543210', Email: 'ramesh@abc.com', CompanyName: 'ABC Pvt Ltd', Address: 'Mumbai, India', Status: 1 },
    { Id: 2, VendorName: 'XYZ Traders', ContactPerson: 'Suresh Patel', PhoneNumber: '8765432109', Email: 'suresh@xyz.com', CompanyName: 'XYZ Ltd', Address: 'Delhi, India', Status: 2 },
    { Id: 3, VendorName: 'Global Tech', ContactPerson: 'Neha Sharma', PhoneNumber: '7654321098', Email: 'neha@globaltech.com', CompanyName: 'Global Technologies', Address: 'Bangalore, India', Status: 1 },
    { Id: 4, VendorName: 'Fasteners Inc', ContactPerson: 'Vikram Singh', PhoneNumber: '6543210987', Email: 'vikram@fasteners.com', CompanyName: 'Fasteners International', Address: 'Pune, India', Status: 3 },
    { Id: 5, VendorName: 'Tools & Co.', ContactPerson: 'Priya Desai', PhoneNumber: '5432109876', Email: 'priya@toolsco.com', CompanyName: 'Tools and Company', Address: 'Chennai, India', Status: 1 },
    { Id: 6, VendorName: 'Elite Supplies', ContactPerson: 'Amit Joshi', PhoneNumber: '4321098765', Email: 'amit@elite.com', CompanyName: 'Elite Pvt Ltd', Address: 'Kolkata, India', Status: 2 },
    { Id: 7, VendorName: 'Smart Solutions', ContactPerson: 'Pooja Verma', PhoneNumber: '3210987654', Email: 'pooja@smartsolutions.com', CompanyName: 'Smart Solutions Ltd', Address: 'Hyderabad, India', Status: 1 },
    { Id: 8, VendorName: 'Prime Distributors', ContactPerson: 'Raj Malhotra', PhoneNumber: '2109876543', Email: 'raj@prime.com', CompanyName: 'Prime Distributors', Address: 'Ahmedabad, India', Status: 3 },
    { Id: 9, VendorName: 'Innovative Works', ContactPerson: 'Sneha Kulkarni', PhoneNumber: '1098765432', Email: 'sneha@innovative.com', CompanyName: 'Innovative Works Ltd', Address: 'Jaipur, India', Status: 1 },
    { Id: 10, VendorName: 'Tech Supplies', ContactPerson: 'Deepak Choudhary', PhoneNumber: '9988776655', Email: 'deepak@techsupplies.com', CompanyName: 'Tech Supplies India', Address: 'Lucknow, India', Status: 2 },
    { Id: 11, VendorName: 'Metro Traders', ContactPerson: 'Sunita Mehta', PhoneNumber: '8877665544', Email: 'sunita@metro.com', CompanyName: 'Metro Traders Ltd', Address: 'Bhopal, India', Status: 1 },
    { Id: 12, VendorName: 'Om Enterprises', ContactPerson: 'Anil Gupta', PhoneNumber: '7766554433', Email: 'anil@om.com', CompanyName: 'Om Enterprises', Address: 'Surat, India', Status: 3 },
    { Id: 13, VendorName: 'Mega Corporation', ContactPerson: 'Geeta Iyer', PhoneNumber: '6655443322', Email: 'geeta@mega.com', CompanyName: 'Mega Corporation Ltd', Address: 'Nagpur, India', Status: 1 },
    { Id: 14, VendorName: 'QuickMart', ContactPerson: 'Kiran Das', PhoneNumber: '5544332211', Email: 'kiran@quickmart.com', CompanyName: 'QuickMart Pvt Ltd', Address: 'Patna, India', Status: 2 },
    { Id: 15, VendorName: 'Pioneer Products', ContactPerson: 'Manoj Thakur', PhoneNumber: '4433221100', Email: 'manoj@pioneer.com', CompanyName: 'Pioneer Products Ltd', Address: 'Indore, India', Status: 1 },
    { Id: 16, VendorName: 'Super Traders', ContactPerson: 'Anjali Kapoor', PhoneNumber: '3322110099', Email: 'anjali@supertraders.com', CompanyName: 'Super Traders Pvt Ltd', Address: 'Chandigarh, India', Status: 3 },
    { Id: 17, VendorName: 'Smart Mart', ContactPerson: 'Rahul Bansal', PhoneNumber: '2211009988', Email: 'rahul@smartmart.com', CompanyName: 'Smart Mart Ltd', Address: 'Goa, India', Status: 1 },
    { Id: 18, VendorName: 'Reliable Distributors', ContactPerson: 'Sakshi Jain', PhoneNumber: '1100998877', Email: 'sakshi@reliable.com', CompanyName: 'Reliable Distributors', Address: 'Dehradun, India', Status: 2 },
    { Id: 19, VendorName: 'Future Tech', ContactPerson: 'Naveen Rao', PhoneNumber: '0099887766', Email: 'naveen@futuretech.com', CompanyName: 'Future Tech Pvt Ltd', Address: 'Raipur, India', Status: 1 },
    { Id: 20, VendorName: 'BestBuy Supplies', ContactPerson: 'Meera Nair', PhoneNumber: '9988776655', Email: 'meera@bestbuy.com', CompanyName: 'BestBuy Supplies Ltd', Address: 'Guwahati, India', Status: 3 }
  ];

  getData(): Observable<any> {
    return of(this.data);
  }

  getDataById(id: number): Observable<any> {
    const item = this.data.find(v => v.Id === Number(id));
    return of(item);
  }

  addData(item): Observable<any> {
    const lastId = this.data.length > 0 ? Math.max(...this.data.map(v => v.Id)) : 0;
    item.Id = lastId + 1;
    this.data.push(item);
    return of(item);
  }

  updateData(Id, item): Observable<any> {
    const index = this.data.findIndex(v => v.Id === Number(Id));
    if (index > -1) {
      this.data[index] = { ...item, Id };
    }
    return of(this.data[index]);
  }

  deleteData(id: number): Observable<any[]> {
    this.data = this.data.filter(v => v.Id !== id);
    return of([...this.data]); 
  }
}

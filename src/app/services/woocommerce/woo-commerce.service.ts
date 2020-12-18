import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WooCommerceService {
  url = 'https://woo.enappd.com';
  consumerKey = 'ck_61ba04acc753efc56ff69b65528433f88ab4bffd';
  consumerSecret = 'cs_69b73ba1f235118f121a25f0fc1e035a216c610e';


  constructor(private http: HttpClient) { }

  getProducts() {
    return `${this.url}/wp-json/wc/v3/products?consumer_key=${
      this.consumerKey
    }&consumer_secret=${this.consumerSecret}`;
  }

  getTags() {
    return new Promise(resolve => {
      this.http
        .get(`${this.url}/wp-json/wc/v3/products/tags?consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getProduct(pid) {
    return new Promise(resolve => {
      this.http
        .get(`${this.url}/wp-json/wc/v3/products/${pid}?consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(productData => {
          resolve(productData);
        });
    });
  }

  getProductReviews(pid) {
    return new Promise(resolve => {
      this.http
        .get(`${this.url}/wp-json/wc/v2/products/${pid}/reviews?consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(productData => {
          resolve(productData);
        });
    });
  }

  updateUser(user, address) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const data = {
      firstName: user.firstName,
      lastName: user.lastName,
      billing: address,
      shipping: address
    };

    const covertedData = this.JSONToURLEncoded(data);

    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers/${user.id}/?consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          covertedData,
          { headers }
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }

  JSONToURLEncoded(element, key?, list?) {
    const newList = list || [];
    if (typeof element === 'object') {
      for (const idx of Object.keys(element)) {
        this.JSONToURLEncoded(
          element[idx],
          // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
          key ? key + '[' + idx + ']' : idx,
          newList
        );
      }
    } else {
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      newList.push(key + '=' + encodeURIComponent(element));
    }
    return newList.join('&');
  }

  createOrder(obj) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const order = this.JSONToURLEncoded(obj);

    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/orders/?consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          order,
          { headers }
        )
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  getPastOrders(customerId) {
    return new Promise(resolve => {
      this.http
        .get(`${
          this.url
        }/wp-json/wc/v3/orders?customer=${customerId}&consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getPosts() {
    return new Promise(resolve => {
      this.http.get(`${this.url}/wp-json/wp/v2/posts`).subscribe(res => {
        resolve(res);
      });
    });
  }

  getPostsTags() {
    return new Promise(resolve => {
      this.http.get(`${this.url}/wp-json/wp/v2/categories`).subscribe(res => {
        resolve(res);
      });
    });
  }

  getPostsData(pid) {
    return new Promise(resolve => {
      this.http
        .get(`${this.url}/wp-json/wp/v2/posts?categories=${pid}&consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(postsData => {
          resolve(postsData);
        });
    });
  }

  getAttributes() {
    return new Promise(resolve => {
      this.http
        .get(`${this.url}/wp-json/wc/v3/products/attributes?consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getAttributeTerms(attrId) {
    return new Promise(resolve => {
      this.http
        .get(`${
          this.url
        }/wp-json/wc/v3/products/attributes/${attrId}/terms?consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  filterProducts(attr, attrTerm) {
    return new Promise(resolve => {
      this.http
        .get(`${
          this.url
        }/wp-json/wc/v3/products?attribute=${attr}&attribute_term=${attrTerm}&consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(res => {
          resolve(res);
        });
    });
  }

  getPaymentGateways() {
    return new Promise(resolve => {
      this.http
        .get(`${this.url}/wp-json/wc/v3/payment_gateways?consumer_key=${
          this.consumerKey
        }&consumer_secret=${this.consumerSecret}`)
        .subscribe(data => {
          resolve(data);
        });
    });
  }

  changePassword(uid, pass) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    const changedPass = `password=${pass}`;
    return new Promise(resolve => {
      this.http
        .post(
          `${this.url}/wp-json/wc/v3/customers/${uid}/?consumer_key=${
            this.consumerKey
          }&consumer_secret=${this.consumerSecret}`,
          changedPass,
          { headers }
        )
        .subscribe(response => {
          resolve(response);
        });
    });
  }
}

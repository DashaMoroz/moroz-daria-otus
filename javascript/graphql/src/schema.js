
const { buildSchema } = require('graphql');

const Products = require('./data/products');
const Customer = require('./data/customer');
const Comments = require('./data/comments');

// GraphQL schema
let schema = buildSchema(`
    type Query {
        product(id: Int!): Product
        groupProducts(group: String): [Product]
        customer(id: Int!): Customer
        groupCustomers(city: String): [Customer]
        getComment(id_customer: Int!): [Comments]
        updateCustomerEmail(id: Int!, email: String!): [Customer]
    },
    type Mutation {
        updateCustomerEmail(id: Int!, email: String!): Customer
    }
    type Product {
        id: Int
        title: String
        group: String
    },
    type Customer {
        id: Int
        fio: String
        email: String
        city: String
    },
    type Comments {
        id_customer: Int
        comment: String
    }
`);

let getProduct = function(args) {
    let id = args.id;
    return Products.filter(product => {
        return product.id == id;
    })[0];
}
let getProducts = function(args) {
    if (args.group) {
        let group = args.group;
        return Products.filter(product => product.group === group);
    } else {
        return Products;
    }
}

let getCustomer = function(args) {
    let id = args.id;
    return Customer.filter(customer => {
        return customer.id == id;
    })[0];
}

let getCustomers = function(args) {
    if (args.city) {
        let city = args.city;
        return Customer.filter(customer => customer.city === city);
    } else {
        return Customer;
    }
}

let getComment = function(args) {
    if (args.id_customer) {
        let id_customer = args.id_customer;
        return Comments.filter(comment => comment.id_customer === id_customer);
    } else {
        return Comments;
    }
}

let updateCustomerEmail = function({id, email}) {
    Customer.map(customer => {
        if (customer.id === id) {
            customer.email = email;
            return customer;
        }
    });
    return Customer.filter(customer => customer.id === id) [0];
}

let root = {
    product: getProduct,
    groupProducts: getProducts,
    customer: getCustomer,
    groupCustomers: getCustomers,
    getComment: getComment,
    updateCustomerEmail: updateCustomerEmail,
};

module.exports.root = root
module.exports.schema = schema


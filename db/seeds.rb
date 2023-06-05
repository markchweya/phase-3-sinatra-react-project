puts "🌱 Seeding spices..."

# Seed your database here


# Create categories
work = Category.create(name: 'Work')
family = Category.create(name: 'Family')
friends = Category.create(name: 'Friends')

# Create contacts
jane = Contact.create(first_name: 'Jane', last_name: 'Doe', email: 'jane@example.com', category: work)
john = Contact.create(first_name: 'John', last_name: 'Smith', email: 'john@example.com', category: work)
mary = Contact.create(first_name: 'Mary', last_name: 'Johnson', email: 'mary@example.com', category: family)
bob = Contact.create(first_name: 'Bob', last_name: 'Jones', email: 'bob@example.com', category: friends)

# Create addresses
Address.create(city: 'Anytown', state: 'CA', contact: jane)
Address.create( city: 'Sometown', state: 'NY',  contact: john)
Address.create( city: 'Hometown', state: 'FL',  contact: mary)
Address.create( city: 'Othertown', state: 'TX',  contact: bob)


puts "✅ Done seeding!"